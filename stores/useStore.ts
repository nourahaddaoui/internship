export const useStore = defineStore('useStore', {
  state: () => ({
    servers: [

    ]
  }),


  actions: {
    useAddServer(data) {
      this.servers.push(data)
    },

    useDeleteServer(id: string) {

      let index = this.servers.findIndex((noura) => noura.id == id)

      this.servers.splice(index, 1);
    },



    async useFetchServers() {
      try {
        const response = await fetch('https://express-ph9i.onrender.com/servers');
        const data = await response.json();
        this.servers = data;
      } catch (error) {
        console.error('Error fetching servers:', error);
      }
    }


  }
})
