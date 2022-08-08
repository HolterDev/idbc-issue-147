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
  async runSelectStatement() {
    await idbPConnectionPool
      .prepareExecute(
        `select teil02, kdnr02 from daten.kafsal20 where teil02 = ? and kdnr02 = ?`,
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

  async setupStoredProdecure() {
    await idbPConnectionPool
      .prepareExecute(
        `CREATE OR REPLACE PROCEDURE DUMMY (
          INOUT programm CHAR(20),
          INOUT Fehlernummer dec(5, 0),
          INOUT Fehlertext CHAR(100),   
          INOUT Programmnummer dec(7, 0),
          INOUT xmldaten varchar(32000),
          INOUT traceId CHAR(36) DEFAULT '',
          INOUT runAsUserId CHAR(10) DEFAULT '')
          LANGUAGE RPGLE
          SPECIFIC DUMMY
          NOT DETERMINISTIC
          MODIFIES SQL DATA
          CALLED ON NULL INPUT
          PARAMETER STYLE SQL`,
        [],
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

  async callStoredProcedure() {
    await idbPConnectionPool
      .prepareExecute(
        "call dummy(?, ?, ?, ?, ?)",
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

  async setupAndExecute() {
    await Functions.setupStoredProdecure();
    await Functions.callStoredProcedure();
  },
};

Functions.runSelectStatement();
Functions.callStoredProcedure();
//Functions.setupAndExecute();
