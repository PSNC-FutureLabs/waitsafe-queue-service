FROM node:16 as build

# install nest cli
RUN npm i -g @nestjs/cli

# create and chown our workdir
RUN mkdir /srv/app

# copy the source code
COPY . /srv/app

# /srv is for site-specific data which is served by this system
WORKDIR /srv/app

RUN npm ci \
    && npm run build \
    && npm prune --production

FROM node:16-alpine

# create and chown our workdir
RUN mkdir /srv/app && chown node:node /srv/app

# run as unprivilaged user "node" from here, there is some trick to that for linux users
USER node

# /srv is for site-specific data which is served by this system
WORKDIR /srv/app

COPY --from=build --chown=node:node /srv/app/package*.json ./
COPY --from=build --chown=node:node /srv/app/node_modules/ ./node_modules/
COPY --from=build --chown=node:node /srv/app/dist/ ./dist/
COPY --from=build --chown=node:node /srv/app/prisma/ ./prisma/

ENV NODE_ENV production

CMD ["npm", "run", "start:prod"]