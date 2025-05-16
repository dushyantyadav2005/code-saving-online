const yargs=require("yargs");

const {hideBin}=require("yargs/helpers");


const {initRepo}=require("./controllers/init")
const {addRepo}=require("./controllers/add")
const {pushRepo}=require("./controllers/push")
const {pullRepo}=require("./controllers/pull")
const {commitRepo}=require("./controllers/commit")
const {revertRepo}=require("./controllers/revert")


yargs(hideBin(process.argv))
.command("init","initalize new repository",{},initRepo)
.command("add <file>","adding file to repo",(yargs)=>{
    yargs.positional("file",{describe:"file to add to the staging area",type:"string",});
},addRepo)
.command("revert <commitid>","reverting to previous comit",(yargs)=>{
    yargs.positional("commitid",{describe:"commit to revert",type:"string",});
},revertRepo)
.command("commit <comment>","commiting",(yargs)=>{
    yargs.positional("comment",{describe:" comment on staged to commiting",type:"string",});
},commitRepo)
.command("push","pushing staged file",{},pushRepo)
.command("pull","pushing staged file",{},pullRepo)
.demandCommand(1,"You need atleast 1 command").help().argv;