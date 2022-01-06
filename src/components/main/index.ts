import { App } from '@townland-project/app'
import { Component } from '@townland-project/dom'

@Component({
    id: 'app-main',
    template: require('./component.htmlx'),
    style: require('./component.scssx')
})
export class MainComponent {
    Close(): void {
        App.Event.emit('app:close')
    }
}
