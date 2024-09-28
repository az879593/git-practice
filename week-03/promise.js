// 利用 promise 來改善 callback hell 問題

function doJob(job, time) {
	return new Promise((reslove, reject) => {
		setTimeout(() => {
			// 只有在這裡，才能知道這個非同步的 setTimeout 已經做完事情了
			let now = new Date();
			reslove(`完成工作 ${job} at ${now.toISOString()}`);
		}, time);
	});
}

// 刷牙 1sec -> 吃早餐 3 sec -> 寫功課 1sec -> 吃午餐 2sec
let now = new Date();
console.log(`開始工作 at ${now.toISOString()}`);
// write your code here
// 以下是使用範例

doJob("刷牙", 1000)
	.then((result) => {
		console.log(result);
		return doJob("吃早餐", 3000);
	})
	.then((result) => {
		console.log(result);
		return doJob("寫功課", 1000);
	})
	.then((result) => {
		console.log(result);
		return doJob("吃午餐", 2000);
	});

// callback hell
/*
doJob("刷牙", 1000, function (data) {
	// 表示 doJob 做完了
    console.log(data);
	doJob("吃早餐", 3000, function (data) {
        console.log(data);
        doJob("寫功課", 1000, function (data) {
            console.log(data);
            doJob("吃午餐", 2000, function (data) {
                console.log(data);
            });
        });
    });
});
*/
