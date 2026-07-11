// 默哀模式
const anniversaries = {
    4.4: "清明节",
    5.12: "汶川大地震纪念日",
    7.7: "中国人民抗日战争纪念日",
    9.18: "九·一八事变纪念日",
    12.13: "南京大屠杀死难者国家公祭日"
};

function checkDays() {
    const myDate = new Date();
    const mon = myDate.getMonth() + 1;
    const date = myDate.getDate();
    const key = `${mon}.${date}`;
    if (Object.prototype.hasOwnProperty.call(anniversaries, key)) {
        console.log(`今天是${anniversaries[key]}`);
        const gray = document.createElement("style");
        gray.innerHTML = "html{filter: grayscale(100%)}";
        document.head.appendChild(gray);
    }
}

const siteDateStatistics = (startDate) => {
    const currentDate = new Date();
    const differenceInTime = currentDate.getTime() - startDate.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return `本站已经稳定运行了 ${Math.round(differenceInDays)} 天`;
};
setTimeout(checkDays(), 0);

var HoldLog = console.log;
console.log = function () {};
queueMicrotask(() => {
    const Log = function () {
        HoldLog.apply(console, arguments);
    };
    const ascll = [`ZLW-0`, `调用前置摄像头拍照成功，识别为【小笨蛋】.`, `Photo captured: `, `🤪`];
    setTimeout(
        Log.bind(
            console,
            `%c ${ascll[0]} %c ${ascll[1]} %c \n${ascll[2]} %c\n${ascll[3]}\n`,
            "color:white;background-color:#4fd953",
            "",
            "",
            "font-size:450%"
        ),
        200
    );

    setTimeout(
        Log.bind(console, "%c WELCOME %c 你好，小笨蛋", "color:white;background-color:#4f90d9", ""),
        250
    );

    setTimeout(
        Log.bind(
            console,
            "%c ⚡ Powered by CrashVibe %c 你正在访问 U1 项目 Wiki",
            "color:white;background-color:#f0ad4e",
            ""
        ),
        300
    );

    setTimeout(
        Log.bind(
            console,
            "%c CrashVibe-3 %c 你已打开控制台",
            "color:white;background-color:#4f90d9",
            ""
        ),
        350
    );

    setTimeout(
        Log.bind(
            console,
            "%c CrashVibe-4 %c 你现在正处于监控中",
            "color:white;background-color:#d9534f",
            ""
        ),
        400
    );

    setTimeout(
        Log.bind(
            console,
            `%c CrashVibe-5 %c ${siteDateStatistics(new Date("2023-11-14"))}.`,
            "color:white;background-color:#4f90d9",
            ""
        ),
        450
    );
});
