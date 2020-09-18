build ::
	docker build -t portfolio .

stop ::
	docker stop portfolio || echo ""
	docker rm portfolio || echo ""

run ::
	docker run -d -p 8080:80 --name portfolio --restart always portfolio

deploy :: build stop run

server ::
	ssh root@studio19.xyz -t "cd ~/projects/studio19-portfolio/ && bash"

git-sync ::
	git add --all && \
	git commit -m "Update web" && \
	git fetch origin master && \
	git rebase FETCH_HEAD && \
	git push origin master

server-deploy ::
	ssh root@studio19.xyz -t "cd ~/projects/studio19-portfolio/ && git pull origin master && make deploy"
