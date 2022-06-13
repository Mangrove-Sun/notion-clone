import { defineStore } from 'pinia'

export const useWorkspaceStore = defineStore('workspace', {
  state() {
    return {
      
    }
  },
  getters: {

  },
  actions: {
    // CRUD
    async createWorkspace() {
      // fetch(url, options)
      const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/notion/workspaces', {
        method: 'POST',
        body: JSON.stringify({
          // parentId: '',
          title: '처음 만드는 워크스페이스',
          content: '내용....',
          // poster: ''
        }),
        headers: {
          'content-type': 'application/json',
          'apikey': 'FcKdtJs202204',
          'username': 'ParkSunHong'
        }
      })
      const workspace = await res.json()
      console.log(workspace)
    }
  }
})
