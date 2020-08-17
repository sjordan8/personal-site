FROM golang:alpine

COPY ./src/server.go ./server.go
RUN go build -o /backend .

ENTRYPOINT [ "/backend" ]
