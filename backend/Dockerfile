FROM golang:1.13-alpine

COPY ./server.go ./server.go
RUN go build -o /backend .

ENTRYPOINT [ "/backend" ]
