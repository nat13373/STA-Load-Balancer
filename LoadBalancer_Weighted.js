// CASO 2: Round Robin Ponderado Load Balancer
export const label = "Round Robin Ponderado";
  export default class WeightedRoundRobinLoadBalancer {
    constructor(servers) {
      this.rotation = servers.flatMap((server) => Array(server.power).fill(server.id));
      this.next = 0;
    }
  onRequestArrival(request, sendToServer) {
    const serverId = this.rotation[this.next];
    this.next = (this.next + 1) % this.rotation.length;
    return sendToServer(serverId);
  }
}