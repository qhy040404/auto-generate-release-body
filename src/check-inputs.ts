export async function checkInputs(a: string | PromiseLike<string>, b: string | PromiseLike<string>, c: string | PromiseLike<string>, d: string | PromiseLike<string>, e: string | PromiseLike<string>, f: string | PromiseLike<string>): Promise<string> {
    if (!a) return a
    if (!b) return b
    if (!c) return c
    if (!d) return d
    if (!e) return e
    if (!f) return f
    return "Nice"
}