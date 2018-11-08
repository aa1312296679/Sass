const child_process = require('child_process');

var options={
    cwd:null,
    env:null,
    endcoding:'utf8',
    maxBuffer: 200*1024,
    timeout:0
}
var workerProcess;
// for(var i=1; i<=3; i++) {
//      workerProcess = child_process.exec(`node js/support${i}.js`, options,
//         //设置子进程的日志信息捕获事件的事件处理
//         //error为当前的子进程的错误信息
//         //stdout和stderr为当前的子进程的输出日志
//         function (error, stdout, stderr) {
//             if (error) {
//                 console.log(error.stack);
//                 console.log('Error code: ' + error.code);
//                 console.log('Signal received: ' + error.signal);
//             }
//             console.log(stdout);
//             // console.log(stderr);
//         });
//
// //设置子进程的退出事件
// //该事件为进程退后触发，code为子进程的进程编号
//     workerProcess.on('exit', function (code) {
//         if(code==0){
//             console.log(`进程已退出，进程无异常`);
//         }else {
//             console.log("该进程已退出，但该进程异常");
//         }
//     });
//
// }
for(var i=1; i<=3; i++) {
     workerProcess = child_process.execSync(`node js/support${i}.js`,[options]);

    //设置子进程的退出事件
    //该事件为进程退后触发，code为子进程的进程编号
    workerProcess.on('exit', function (code) {
        if(code==0){
            console.log(`进程已退出，进程无异常`);
        }else {
            console.log("该进程已退出，但该进程异常");
        }
    });
}

