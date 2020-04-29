export class MenuOptions {
    icon: string
    title: string
    action: Function

    constructor(icon: string, title: string, action: Function) {
        this.icon = icon
        this.title = title
        this.action = action
    }
}
