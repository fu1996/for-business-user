# 构建docker 镜像
docker build -t user-symbol -f Dockerfile ../window-user-symbol
# -p：当前机器的8080端口和镜像80 端口绑定，使用8080端口
# -v：映射 当前文件夹下的/env/user-symbol.js 到/usr/share/nginx/html/user-symbol.js
# --name：指定生成的镜像名
# -d：指定使用的基础镜像
docker run -itd -p 8080:80 -v ${PWD}/env/user-symbol.js:/usr/share/nginx/html/user-symbol.js --name user-test-2 -d user-symbol