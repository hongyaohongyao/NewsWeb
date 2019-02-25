import $ from 'jquery'
import Vue from '../node_modules/vue/dist/vue.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import axios from 'axios'
import vaxios from 'vue-axios'

Vue.use(vaxios, axios)

Vue.component("nitem", {
	template: '#nitem',
	data() {
		return {
			flag0: true
		}
	},
	props: ['anews']
})
var vm = new Vue({
	el: '#news',
	data: {
		newslist: []
	},

	methods: {

	},
	created() {
		this.axios.get('./txt/kong.txt').then(res => {
			/* console.log(res.data) */
			this.newslist = res.data
		}).catch(err => {
			console.log("error:" + err)
		})
		/* this.newslist = new Array({
			id: "1",
			title: "123",
			update: new Date().toLocaleDateString(),
			author: "hongyao",
			content: "hahahahah"
		}, {
			id: "2",
			title: "123",
			update: new Date().toLocaleDateString(),
			author: "hongyao2",
			content: "hahahahah"
		}) */
	}
})
