
export function bin2hex(bin: string){
  return bin.match(/.{8}/gi).map(a=>parseInt(a,2).toString(16)).join('');
}