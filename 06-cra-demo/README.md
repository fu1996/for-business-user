# @fu1996/webapck-resolver-mode-plugin 的原理如下

webpack 中使用的 resolve 配置，其本质上是 enhance-resolve 库，其配置的 extensions 会被遍历查找，其实在这里 将 `.h5.jsx` 配置在 `.jsx` 的前面，webpack 中的 enhance-resolve 就会去优先查找 `.h5.jsx`结尾的文件，这就是插件的实现原理。

基于以上的实现原理，对插件进行更加细致的处理，

1. 比如在对一些指定的目录或者文件后缀才进行上述优先级后缀的规则，进而实现更细致的打包控制。
