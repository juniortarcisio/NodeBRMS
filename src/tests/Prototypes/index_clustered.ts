/*
import app from '../app'
import * as cluster from 'cluster'
import * as os from 'os'

const port = process.env.PORT || 1337;

if (cluster.isMaster) {
  
  var numCPUs = os.cpus().length;

  for (var i = 0; i < numCPUs; i++) {
      cluster.fork();
  }

  cluster.on('exit', function(worker, code, signal) {
      console.log('worker ' + worker.process.pid + ' died');
  });

} else {
  app.listen(port, (err) => {
    if (err)
      return console.log(err);
  
    return console.log(`server is listening on ${port}`)
  })  
}
*/