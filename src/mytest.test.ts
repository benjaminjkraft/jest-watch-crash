it("passes, but throws later", () => {
    setTimeout(() => { throw new Error("oh noes") }, 1000)
})
