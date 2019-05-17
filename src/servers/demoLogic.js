// 通用
import url from './urls' 
let n = 0;

export default class DemoLogic {

	static Login(parms) {
		parms = {
			userCode:'bgyms',
			password:'bgyms',
			clientId:'bgyfactorOmp'
		}

		return $http.post(url.getAccessToken, parms);
	}

  static GetDemoData(parms) {
  	parms = {
			userCode:'bgyms',
			password:'bgyms',
			clientId:'bgyfactorOmp'
		}

		$http.post(url.getAccessToken, parms);
    // return $http.post(url.allDict, parms);
    return new Promise(function(resolve, reject){
    	n++;
    	let result = {
    		errorCode:1,
    		errorMsg:'',
    		data:[
					{
	          date: Date.now(),
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: Date.now(),
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: Date.now(),
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: Date.now(),
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: Date.now(),
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: Date.now(),
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: Date.now(),
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: Date.now(),
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: Date.now(),
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }, {
	          date: Date.now(),
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333
	        }
				],
    		page:{
    			currentPage:n,
    			total:100
    		}
    	}
    	setTimeout(function(){
    		resolve(result)
    	}, 500)
    });
  }
}
