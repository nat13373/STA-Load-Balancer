// ejemplo clase

export const label = "Round Robin Load Balancer";
  export default class RoundRobinLoadBalancer {
    constructor(servers) {
      this.servers = servers;
      this.next=0;
      let best = this.servers[0];
      let bestLoad = Infinity;
    }
  onRequestArrival(request, sendToServer) {
    for (const server of this.servers) {
      const server = this.servers[this.next];
      this.next = (this.next + 1) % this.servers.length;
    return sendToServer(server.id);
  }
}
}