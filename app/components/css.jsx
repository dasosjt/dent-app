import Head from 'next/head'

export default () => (
	<div>
		<Head>
			<link
				rel="stylesheet"
				href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
			<style>{`
			    	body { background: #1b1c1d; color: rgba(255,255,255,.9); }
			    	label { color: white !important; }
        	`}</style>
		</Head>
	</div>
)