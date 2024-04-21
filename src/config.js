const { exec } = require("child_process");

module.exports = {
 incrementController: async (req, res) => {
    const repoPath = "/var/www/html/recipe-aws-portfolio";
    exec(`cd ${repoPath} && git pull`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        res.status(500).send("Error al ejecutar git pull");
        return;
      }
      console.log(`stdout: ${stdout}`);
      if (stdout) {
        exec(`cd ${repoPath} && npm run build`, (error, stdout, stderr) => {
          if (error) {
            console.error(`exec error: ${error}`);
            res.status(500).send("Error al ejecutar npm run build");
            return;
          }
          console.log(`stdout: ${stdout}`);
          res.status(200).send("OK");
        });
      } else {
        res.status(200).send("No hay cambios para actualizar");
      }
    });
 },
};
