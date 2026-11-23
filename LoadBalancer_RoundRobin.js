// CASO 1: Round Robin Load Balancer
export const label = "Round Robin Load Balancer";
  export default class RoundRobinLoadBalancer {
    constructor(servers) {
      this.servers = servers;
      this.next=0;
    }
  onRequestArrival(request, sendToServer) {
    const server = this.servers[this.next];
    this.next = (this.next + 1) % this.servers.length;
    return sendToServer(server.id);
  }
}