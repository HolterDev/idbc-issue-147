import { DBPool } from "idb-pconnector";
import pkg from "idb-connector";
const { dbconn, dbstmt } = pkg;

console.log("I run!");

const idbPConnectionPool = new DBPool(
  {
    url: "*LOCAL",
  },
  {
    debug: false,
    incrementSize: 8,
  }
);

const Functions = {
  runSelectStatementViaExecApi() {
    const idbConnection = new dbconn();
    idbConnection.conn("*LOCAL");
    const idbStatement = new dbstmt(idbConnection);
    idbStatement.exec("select companyId, clientId from tissue147", (x: any) => {
      console.log("statement executed");
      console.log(JSON.stringify(x));
      idbStatement.close();
      idbConnection.disconn();
      idbConnection.close();
    });
  },

  runSelectStatementViaFetchApi() {
    const idbConnection = new dbconn();
    idbConnection.conn("*LOCAL");
    const idbStatement = new dbstmt(idbConnection);

    idbStatement.prepare("select companyId, clientId from tissue147", () => {
      idbStatement.execute(() => {
        idbStatement.fetchAll((x: any) => {
          console.log("statement executed");
          console.log(JSON.stringify(x));
          idbStatement.close();
        });
      });
    });
  },

  async runSelectStatementWithPromise() {
    await idbPConnectionPool
      .prepareExecute(
        "select companyId, clientId from tissue147 where companyId = ? and clientId = ?",
        [0, 6020],
        {
          io: "in",
        }
      )
      .then((result) => {
        console.log("statement executed");
        console.log(result);
      })
      .catch((reason) => {
        console.log("rejected");
        console.log(reason);
      });
  },

  async callStoredProcedureWithPromise() {
    await idbPConnectionPool
      .prepareExecute(
        "call PISSUE147(?, ?, ?, ?, ?)",
        [
          "XGETCOLIN",
          0,
          "",
          0,
          "<?xml version='1.0' encoding='ISO-8859-1'?><snd><data><companyid>0</companyid></data></snd>",
        ],
        {
          io: "both",
        }
      )
      .then((result) => {
        console.log("function executed");
        console.log(result);
      })
      .catch((reason) => {
        console.log("rejected");
        console.log(reason);
      });
  },
};

//Functions.runSelectStatementWithPromise();
//Functions.callStoredProcedureWithPromise();
Functions.runSelectStatementViaExecApi();
Functions.runSelectStatementViaFetchApi();
