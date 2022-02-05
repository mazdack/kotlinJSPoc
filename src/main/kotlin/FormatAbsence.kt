@JsExport
fun test(input: Map<String, String>): String {
    println("hello world")
    println("input is $input")
    return "output"
}

@JsExport
fun step(input: String): String {
    println("hello world")
    println("step input is $input")
    return "step output"
}