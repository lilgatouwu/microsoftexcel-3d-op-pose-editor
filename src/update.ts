/// <reference types="vite-plugin-pwa/client" />

import { registerSW } from 'virtual:pwa-register'
import Swal from 'sweetalert2'

async function PWAPopup(update: (reloadPage?: boolean) => Promise<void>) {
    const result = await Swal.fire('有更新啦，请确认！！')
    if (result.isConfirmed) {
        update(true)
    }
}
export function PWACheck() {
    const updateSW = registerSW({
        onNeedRefresh() {
            console.log("有更新，需要刷新！！")
            PWAPopup(updateSW)
        },
        onOfflineReady() {
            console.log("已经入离线模式！！")
        },
    })
}