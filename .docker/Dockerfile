FROM ubuntu:14.04

MAINTAINER @piccagliani

RUN cp -p /usr/share/zoneinfo/Asia/Tokyo /etc/localtime

RUN apt-get update
RUN apt-get -y upgrade
RUN apt-get install -y nodejs npm
RUN update-alternatives --install /usr/bin/node node /usr/bin/nodejs 10

CMD ["/bin/bash"]
