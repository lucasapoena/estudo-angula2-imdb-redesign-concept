<h1>Projeto de Estudos - IMDB Redesign Concept</h1>
<h2>Design</h2>
<ul>
	<li>Design-Base: https://www.behance.net/gallery/33630879/IMDb-Redesign-Concept</li>
	<li>Cores:</li>
</ul>
<h2>Desenvolvido com:</h2>
<ul>
	<li>HTML, CSS, JS</li>
	<li>ANGULAR 2 v4.01</li>
	<li>JSON-SERVER: Utilizado para simular a base de dados da aplicação de back-end, podendo ser iniciada dois tipos de bases de dados. Uma com dados estáticos e outra gerada a partir do FakerJS.
		<ul>
			<li>Base server/db.json = Base dados estáticos</li>
			<li>Base server/fakerdb.js = Base gerada através do FakerJS</li>
		</ul>
	</li>
</ul>

<div>
	<h3>Instalando as ferramentas necessárias</h3>
	<p>Abra seu Terminal/Shell e digite:</p>
	<p><code>npm install -g json-server</code></p>
	<h3>Iniciando o servidor</h3>
	<p>Abra seu Terminal/Shell</p>
	<p>Navegue até a pasta <code>server</code> e digite:</p>
	<code>json-server db.json -p 3002</code>
	<p>O servidor será iniciado no endereço http://localhost:3002</p>
	<p>Você também poderá utilizar a base de dados com os dados gerados pelo FakerJS, para isso é necessário ter o mesmo instalado junto ao Underscore em seu NodeJS, siga os passos abaixo para instala-lo.</p>
	<p>Abra seu Terminal/Shell</p>
	<p><code>npm install faker underscore</code></p>
</div>


