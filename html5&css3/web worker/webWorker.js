var f = (n) => {
    if (n <= 2) return 1;
    return f(n - 1) + f(n - 2);
};

onmessage = function (e) {
    console.log(e.data);
    res = f(e.data)
    this.postMessage(res)
}