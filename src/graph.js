//Example 
// Pairs => [[from,to],[to,from]]
// Source => from
// To => to 
// Should return true.

const getAdjacentList = function (pairs) {
  const adjacentList = {};
  pairs.forEach(([from,to]) => {
    if (adjacentList[from] === undefined) {
      adjacentList[from] = [to];
    } else {
      adjacentList[from].push(to);
    }
  });
  return adjacentList;
}

const bfs = function(pairs,source,target){
  const visited = [];
  const adjacencyList = getAdjacentList(pairs);
  const queue = [source];
  let found = false;
  while (queue.length > 0 && found === false){
    let currSource = queue.shift();
    let listToSearch = adjacencyList[currSource] || [];
    found = listToSearch.includes(target);
    listToSearch.forEach(element => {
      if (!(queue.includes(element)) && !(visited.includes(element))) {
        queue.push(element);
      }
    });
    visited.push(currSource);
  }
  return found;
};

module.exports = {bfs};
