build ::
	docker build -t portfolio .

stop ::
	docker stop portfolio || echo ""
	docker rm portfolio || echo ""

run ::
	docker run -d -p 8080:80 --name portfolio --restart always portfolio

server :: build stop run
