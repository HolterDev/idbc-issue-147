import { DBPool } from "idb-pconnector";

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
        console.log("function executed");
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

Functions.runSelectStatementWithPromise();
Functions.callStoredProcedureWithPromise();
