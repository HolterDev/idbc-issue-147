/** Declaration file generated by dts-gen */

declare module "idb-connector" {
  export class dbconn {
    constructor();

    // Native method; no parameter or return type inference available
    close(): any;

    // Native method; no parameter or return type inference available
    conn(params?: any): any;

    // Native method; no parameter or return type inference available
    debug(): any;

    // Native method; no parameter or return type inference available
    disconn(): any;

    // Native method; no parameter or return type inference available
    getConnAttr(): any;

    // Native method; no parameter or return type inference available
    isConnected(): any;

    // Native method; no parameter or return type inference available
    setConnAttr(): any;

    // Native method; no parameter or return type inference available
    validStmt(): any;
  }

  export class dbstmt {
    constructor(params?: any);

    // Native method; no parameter or return type inference available
    bindParam(parameterList: any, callback: any): any;

    bindParameters(parameterList: any, callback: any): any;

    // Native method; no parameter or return type inference available
    bindParamSync(): any;

    // Native method; no parameter or return type inference available
    close(): any;

    // Native method; no parameter or return type inference available
    closeCursor(): any;

    // Native method; no parameter or return type inference available
    commit(): any;

    // Native method; no parameter or return type inference available
    exec(statement: string, callback: any): any;

    // Native method; no parameter or return type inference available
    execSync(): any;

    // Native method; no parameter or return type inference available
    execute(callback: any): any;

    // Native method; no parameter or return type inference available
    executeSync(): any;

    // Native method; no parameter or return type inference available
    fetch(): any;

    // Native method; no parameter or return type inference available
    fetchAll(callback: any): any;

    // Native method; no parameter or return type inference available
    fetchAllSync(): any;

    // Native method; no parameter or return type inference available
    fetchSync(): any;

    // Native method; no parameter or return type inference available
    fieldName(): any;

    // Native method; no parameter or return type inference available
    fieldNullable(): any;

    // Native method; no parameter or return type inference available
    fieldPrecise(): any;

    // Native method; no parameter or return type inference available
    fieldScale(): any;

    // Native method; no parameter or return type inference available
    fieldType(): any;

    // Native method; no parameter or return type inference available
    fieldWidth(): any;

    // Native method; no parameter or return type inference available
    getStmtAttr(): any;

    // Native method; no parameter or return type inference available
    nextResult(): any;

    // Native method; no parameter or return type inference available
    numFields(): any;

    // Native method; no parameter or return type inference available
    numRows(): any;

    // Native method; no parameter or return type inference available
    prepare(statement: string, callback: any): any;

    // Native method; no parameter or return type inference available
    prepareSync(): any;

    // Native method; no parameter or return type inference available
    reset(): any;

    // Native method; no parameter or return type inference available
    rollback(): any;

    // Native method; no parameter or return type inference available
    setStmtAttr(): any;

    // Native method; no parameter or return type inference available
    stmtError(): any;
  }

  export const BIND_BINARY: number;

  export const BIND_BLOB: number;

  export const BIND_BOOLEAN: number;

  export const BIND_CLOB: number;

  export const BIND_INT: number;

  export const BIND_NULL: number;

  export const BIND_NUMERIC: number;

  export const BIND_STRING: number;

  export const ROUND_CEILING: number;

  export const ROUND_DOWN: number;

  export const ROUND_FLOOR: number;

  export const ROUND_HALF_DOWN: number;

  export const ROUND_HALF_EVEN: number;

  export const ROUND_HALF_UP: number;

  export const ROUND_UP: number;

  export const SQL_ACCESS_MODE: number;

  export const SQL_ACTIVE_CONNECTIONS: number;

  export const SQL_ACTIVE_STATEMENTS: number;

  export const SQL_AF_ALL: number;

  export const SQL_AF_AVG: number;

  export const SQL_AF_COUNT: number;

  export const SQL_AF_DISTINCT: number;

  export const SQL_AF_MAX: number;

  export const SQL_AF_MIN: number;

  export const SQL_AF_SUM: number;

  export const SQL_AGGREGATE_FUNCTIONS: number;

  export const SQL_ALL_EXCEPT_LIKE: number;

  export const SQL_ALL_IO: number;

  export const SQL_ALL_TYPES: number;

  export const SQL_API_SQLALLOCCONNECT: number;

  export const SQL_API_SQLALLOCENV: number;

  export const SQL_API_SQLALLOCHANDLE: number;

  export const SQL_API_SQLALLOCSTMT: number;

  export const SQL_API_SQLBINDCOL: number;

  export const SQL_API_SQLBINDFILETOCOL: number;

  export const SQL_API_SQLBINDFILETOPARAM: number;

  export const SQL_API_SQLBINDPARAM: number;

  export const SQL_API_SQLBINDPARAMETER: number;

  export const SQL_API_SQLCANCEL: number;

  export const SQL_API_SQLCLOSECURSOR: number;

  export const SQL_API_SQLCOLATTRIBUTE: number;

  export const SQL_API_SQLCOLATTRIBUTES: number;

  export const SQL_API_SQLCOLATTRIBUTESW: number;

  export const SQL_API_SQLCOLATTRIBUTEW: number;

  export const SQL_API_SQLCOLUMNPRIVILEGES: number;

  export const SQL_API_SQLCOLUMNPRIVILEGESW: number;

  export const SQL_API_SQLCOLUMNS: number;

  export const SQL_API_SQLCOLUMNSW: number;

  export const SQL_API_SQLCONNECT: number;

  export const SQL_API_SQLCONNECTW: number;

  export const SQL_API_SQLCOPYDESC: number;

  export const SQL_API_SQLDATASOURCES: number;

  export const SQL_API_SQLDATASOURCESW: number;

  export const SQL_API_SQLDESCRIBECOL: number;

  export const SQL_API_SQLDESCRIBECOLW: number;

  export const SQL_API_SQLDESCRIBEPARAM: number;

  export const SQL_API_SQLDISCONNECT: number;

  export const SQL_API_SQLDRIVERCONNECT: number;

  export const SQL_API_SQLENDTRAN: number;

  export const SQL_API_SQLERROR: number;

  export const SQL_API_SQLERRORW: number;

  export const SQL_API_SQLEXECDIRECT: number;

  export const SQL_API_SQLEXECDIRECTW: number;

  export const SQL_API_SQLEXECUTE: number;

  export const SQL_API_SQLEXTENDEDFETCH: number;

  export const SQL_API_SQLFETCH: number;

  export const SQL_API_SQLFETCHSCROLL: number;

  export const SQL_API_SQLFOREIGNKEYS: number;

  export const SQL_API_SQLFOREIGNKEYSW: number;

  export const SQL_API_SQLFREECONNECT: number;

  export const SQL_API_SQLFREEENV: number;

  export const SQL_API_SQLFREEHANDLE: number;

  export const SQL_API_SQLFREESTMT: number;

  export const SQL_API_SQLGETCOL: number;

  export const SQL_API_SQLGETCOLW: number;

  export const SQL_API_SQLGETCONNECTATTR: number;

  export const SQL_API_SQLGETCONNECTATTRW: number;

  export const SQL_API_SQLGETCONNECTOPTION: number;

  export const SQL_API_SQLGETCONNECTOPTIONW: number;

  export const SQL_API_SQLGETCURSORNAME: number;

  export const SQL_API_SQLGETCURSORNAMEW: number;

  export const SQL_API_SQLGETDATA: number;

  export const SQL_API_SQLGETDESCFIELD: number;

  export const SQL_API_SQLGETDESCFIELDW: number;

  export const SQL_API_SQLGETDESCREC: number;

  export const SQL_API_SQLGETDESCRECW: number;

  export const SQL_API_SQLGETDIAGFIELD: number;

  export const SQL_API_SQLGETDIAGFIELDW: number;

  export const SQL_API_SQLGETDIAGREC: number;

  export const SQL_API_SQLGETDIAGRECW: number;

  export const SQL_API_SQLGETENVATTR: number;

  export const SQL_API_SQLGETFUNCTIONS: number;

  export const SQL_API_SQLGETINFO: number;

  export const SQL_API_SQLGETINFOW: number;

  export const SQL_API_SQLGETLENGTH: number;

  export const SQL_API_SQLGETPOSITION: number;

  export const SQL_API_SQLGETPOSITIONW: number;

  export const SQL_API_SQLGETSTMTATTR: number;

  export const SQL_API_SQLGETSTMTATTRW: number;

  export const SQL_API_SQLGETSTMTOPTION: number;

  export const SQL_API_SQLGETSTMTOPTIONW: number;

  export const SQL_API_SQLGETSUBSTRING: number;

  export const SQL_API_SQLGETSUBSTRINGW: number;

  export const SQL_API_SQLGETTYPEINFO: number;

  export const SQL_API_SQLGETTYPEINFOW: number;

  export const SQL_API_SQLLANGUAGES: number;

  export const SQL_API_SQLMORERESULTS: number;

  export const SQL_API_SQLNATIVESQL: number;

  export const SQL_API_SQLNATIVESQLW: number;

  export const SQL_API_SQLNEXTRESULT: number;

  export const SQL_API_SQLNUMPARAMS: number;

  export const SQL_API_SQLNUMRESULTCOLS: number;

  export const SQL_API_SQLPARAMDATA: number;

  export const SQL_API_SQLPARAMOPTIONS: number;

  export const SQL_API_SQLPREPARE: number;

  export const SQL_API_SQLPREPAREW: number;

  export const SQL_API_SQLPRIMARYKEYS: number;

  export const SQL_API_SQLPRIMARYKEYSW: number;

  export const SQL_API_SQLPROCEDURECOLUMNS: number;

  export const SQL_API_SQLPROCEDURECOLUMNSW: number;

  export const SQL_API_SQLPROCEDURES: number;

  export const SQL_API_SQLPROCEDURESW: number;

  export const SQL_API_SQLPUTDATA: number;

  export const SQL_API_SQLRELEASEENV: number;

  export const SQL_API_SQLROWCOUNT: number;

  export const SQL_API_SQLSETCONNECTATTR: number;

  export const SQL_API_SQLSETCONNECTATTRW: number;

  export const SQL_API_SQLSETCONNECTOPTION: number;

  export const SQL_API_SQLSETCONNECTOPTIONW: number;

  export const SQL_API_SQLSETCURSORNAME: number;

  export const SQL_API_SQLSETCURSORNAMEW: number;

  export const SQL_API_SQLSETDESCFIELD: number;

  export const SQL_API_SQLSETDESCFIELDW: number;

  export const SQL_API_SQLSETDESCREC: number;

  export const SQL_API_SQLSETENVATTR: number;

  export const SQL_API_SQLSETPARAM: number;

  export const SQL_API_SQLSETPOS: number;

  export const SQL_API_SQLSETSTMTATTR: number;

  export const SQL_API_SQLSETSTMTATTRW: number;

  export const SQL_API_SQLSETSTMTOPTION: number;

  export const SQL_API_SQLSETSTMTOPTIONW: number;

  export const SQL_API_SQLSPECIALCOLUMNS: number;

  export const SQL_API_SQLSPECIALCOLUMNSW: number;

  export const SQL_API_SQLSTARTTRAN: number;

  export const SQL_API_SQLSTATISTICS: number;

  export const SQL_API_SQLSTATISTICSW: number;

  export const SQL_API_SQLTABLEPRIVILEGES: number;

  export const SQL_API_SQLTABLEPRIVILEGESW: number;

  export const SQL_API_SQLTABLES: number;

  export const SQL_API_SQLTABLESW: number;

  export const SQL_API_SQLTRANSACT: number;

  export const SQL_ARD_TYPE: number;

  export const SQL_ATTR_2ND_LEVEL_TEXT: number;

  export const SQL_ATTR_ACCESS_MODE: number;

  export const SQL_ATTR_ADOPT_OWNER_AUTH: number;

  export const SQL_ATTR_ANSI_APP: number;

  export const SQL_ATTR_APP_PARAM_DESC: number;

  export const SQL_ATTR_APP_ROW_DESC: number;

  export const SQL_ATTR_AUTOCOMMIT: number;

  export const SQL_ATTR_AUTO_IPD: number;

  export const SQL_ATTR_BIND_TYPE: number;

  export const SQL_ATTR_CLOSEONEOF: number;

  export const SQL_ATTR_COMMIT: number;

  export const SQL_ATTR_CONCURRENCY: number;

  export const SQL_ATTR_CONCURRENT_ACCESS_RESOLUTION: number;

  export const SQL_ATTR_CONN_SORT_SEQUENCE: number;

  export const SQL_ATTR_CORRELATOR: number;

  export const SQL_ATTR_CURSOR_HOLD: number;

  export const SQL_ATTR_CURSOR_SCROLLABLE: number;

  export const SQL_ATTR_CURSOR_SENSITIVITY: number;

  export const SQL_ATTR_CURSOR_TYPE: number;

  export const SQL_ATTR_DATE_FMT: number;

  export const SQL_ATTR_DATE_SEP: number;

  export const SQL_ATTR_DBC_DEFAULT_LIB: number;

  export const SQL_ATTR_DBC_SYS_NAMING: number;

  export const SQL_ATTR_DECFLOAT_ROUNDING_MODE: number;

  export const SQL_ATTR_DECIMAL_SEP: number;

  export const SQL_ATTR_DEFAULT_LIB: number;

  export const SQL_ATTR_ENVHNDL_COUNTER: number;

  export const SQL_ATTR_ESCAPE_CHAR: number;

  export const SQL_ATTR_EXTENDED_COL_INFO: number;

  export const SQL_ATTR_EXTENDED_INDICATORS: number;

  export const SQL_ATTR_FOR_FETCH_ONLY: number;

  export const SQL_ATTR_FREE_LOCATORS: number;

  export const SQL_ATTR_FULL_OPEN: number;

  export const SQL_ATTR_HEX_LITERALS: number;

  export const SQL_ATTR_IMP_PARAM_DESC: number;

  export const SQL_ATTR_IMP_ROW_DESC: number;

  export const SQL_ATTR_INCLUDE_NULL_IN_LEN: number;

  export const SQL_ATTR_INFO_ACCTSTR: number;

  export const SQL_ATTR_INFO_APPLNAME: number;

  export const SQL_ATTR_INFO_PROGRAMID: number;

  export const SQL_ATTR_INFO_USERID: number;

  export const SQL_ATTR_INFO_WRKSTNNAME: number;

  export const SQL_ATTR_JOB_SORT_SEQUENCE: number;

  export const SQL_ATTR_MAX_PRECISION: number;

  export const SQL_ATTR_MAX_SCALE: number;

  export const SQL_ATTR_MIN_DIVIDE_SCALE: number;

  export const SQL_ATTR_NULLT_ARRAY_RESULTS: number;

  export const SQL_ATTR_NULLT_OUTPUT_PARMS: number;

  export const SQL_ATTR_NULL_REQUIRED: number;

  export const SQL_ATTR_NUMBER_RESULTSET_ROWS_PTR: number;

  export const SQL_ATTR_OLD_MTADTA_BEHAVIOR: number;

  export const SQL_ATTR_OUTPUT_NTS: number;

  export const SQL_ATTR_PARAMSET_SIZE: number;

  export const SQL_ATTR_PARAMS_PROCESSED_PTR: number;

  export const SQL_ATTR_PARAM_BIND_TYPE: number;

  export const SQL_ATTR_PARAM_STATUS_PTR: number;

  export const SQL_ATTR_PREFETCH: number;

  export const SQL_ATTR_QUERY_OPTIMIZE_GOAL: number;

  export const SQL_ATTR_READONLY: number;

  export const SQL_ATTR_READWRITE_UNKNOWN: number;

  export const SQL_ATTR_REQUIRE_PROFILE: number;

  export const SQL_ATTR_ROWSET_SIZE: number;

  export const SQL_ATTR_ROWS_FETCHED_PTR: number;

  export const SQL_ATTR_ROW_ARRAY_SIZE: number;

  export const SQL_ATTR_ROW_BIND_TYPE: number;

  export const SQL_ATTR_ROW_STATUS_PTR: number;

  export const SQL_ATTR_SAVEPOINT_NAME: number;

  export const SQL_ATTR_SERVER_MODE: number;

  export const SQL_ATTR_SET_SSA: number;

  export const SQL_ATTR_SYSBAS_CMT: number;

  export const SQL_ATTR_SYSCAP: number;

  export const SQL_ATTR_SYS_NAMING: number;

  export const SQL_ATTR_TIMESTAMP_PREC: number;

  export const SQL_ATTR_TIME_FMT: number;

  export const SQL_ATTR_TIME_SEP: number;

  export const SQL_ATTR_TRACE: number;

  export const SQL_ATTR_TRACE_CLI: number;

  export const SQL_ATTR_TRACE_DBMON: number;

  export const SQL_ATTR_TRACE_DEBUG: number;

  export const SQL_ATTR_TRACE_JOBLOG: number;

  export const SQL_ATTR_TRACE_STRTRC: number;

  export const SQL_ATTR_TRUNCATION_RTNC: number;

  export const SQL_ATTR_TXN_EXTERNAL: number;

  export const SQL_ATTR_TXN_INFO: number;

  export const SQL_ATTR_TXN_ISOLATION: number;

  export const SQL_ATTR_UCS2: number;

  export const SQL_ATTR_UTF8: number;

  export const SQL_ATTR_WRITE: number;

  export const SQL_AUTOCOMMIT: number;

  export const SQL_AUTOCOMMIT_OFF: number;

  export const SQL_AUTOCOMMIT_ON: number;

  export const SQL_BIGINT: number;

  export const SQL_BIGINT_PREC: number;

  export const SQL_BINARY: number;

  export const SQL_BIND_BY_COLUMN: number;

  export const SQL_BIND_BY_ROW: number;

  export const SQL_BIND_TYPE: number;

  export const SQL_BLOB: number;

  export const SQL_BLOB_LOCATOR: number;

  export const SQL_CASCADE: number;

  export const SQL_CATALOG_LOCATION: number;

  export const SQL_CATALOG_NAME: number;

  export const SQL_CATALOG_NAME_SEPARATOR: number;

  export const SQL_CATALOG_TERM: number;

  export const SQL_CATALOG_USAGE: number;

  export const SQL_CB_CLOSE: number;

  export const SQL_CB_DELETE: number;

  export const SQL_CB_PRESERVE: number;

  export const SQL_CHAR: number;

  export const SQL_CLOB: number;

  export const SQL_CLOB_LOCATOR: number;

  export const SQL_CLOSE: number;

  export const SQL_CN_ANY: number;

  export const SQL_CN_DIFFERENT: number;

  export const SQL_CN_NONE: number;

  export const SQL_CODE_DATE: number;

  export const SQL_CODE_TIME: number;

  export const SQL_CODE_TIMESTAMP: number;

  export const SQL_COLUMN_ALIAS: number;

  export const SQL_COLUMN_ALLOC_AUTO: number;

  export const SQL_COLUMN_ALLOC_TYPE: number;

  export const SQL_COLUMN_ALLOC_USER: number;

  export const SQL_COLUMN_AUTO_INCREMENT: number;

  export const SQL_COLUMN_BASE_COLUMN: number;

  export const SQL_COLUMN_BASE_SCHEMA: number;

  export const SQL_COLUMN_BASE_TABLE: number;

  export const SQL_COLUMN_COUNT: number;

  export const SQL_COLUMN_DATA_PTR: number;

  export const SQL_COLUMN_DATETIME_INTERVAL_CODE: number;

  export const SQL_COLUMN_DISPLAY_SIZE: number;

  export const SQL_COLUMN_INDICATOR_PTR: number;

  export const SQL_COLUMN_LABEL: number;

  export const SQL_COLUMN_LENGTH: number;

  export const SQL_COLUMN_LENGTH_PTR: number;

  export const SQL_COLUMN_MONEY: number;

  export const SQL_COLUMN_NAME: number;

  export const SQL_COLUMN_NULLABLE: number;

  export const SQL_COLUMN_PRECISION: number;

  export const SQL_COLUMN_SCALE: number;

  export const SQL_COLUMN_SEARCHABLE: number;

  export const SQL_COLUMN_TYPE: number;

  export const SQL_COLUMN_UNNAMED: number;

  export const SQL_COLUMN_UPDATABLE: number;

  export const SQL_COMMIT: number;

  export const SQL_COMMIT_ALL: number;

  export const SQL_COMMIT_CHG: number;

  export const SQL_COMMIT_CS: number;

  export const SQL_COMMIT_HOLD: number;

  export const SQL_COMMIT_NONE: number;

  export const SQL_COMMIT_RR: number;

  export const SQL_COMMIT_RS: number;

  export const SQL_COMMIT_UR: number;

  export const SQL_CONCURRENCY: number;

  export const SQL_CONCURRENT_ACCESS_RESOLUTION_UNSET: number;

  export const SQL_CONCUR_LOCK: number;

  export const SQL_CONCUR_READ_ONLY: number;

  export const SQL_CONCUR_ROWVER: number;

  export const SQL_CONCUR_VALUES: number;

  export const SQL_CONNECTION_JOB_NAME: number;

  export const SQL_CONVERT_BIGINT: number;

  export const SQL_CONVERT_BINARY: number;

  export const SQL_CONVERT_BIT: number;

  export const SQL_CONVERT_BLOB: number;

  export const SQL_CONVERT_CHAR: number;

  export const SQL_CONVERT_CLOB: number;

  export const SQL_CONVERT_DATE: number;

  export const SQL_CONVERT_DBCLOB: number;

  export const SQL_CONVERT_DECFLOAT16: number;

  export const SQL_CONVERT_DECFLOAT34: number;

  export const SQL_CONVERT_DECFLOAT7: number;

  export const SQL_CONVERT_DECIMAL: number;

  export const SQL_CONVERT_DOUBLE: number;

  export const SQL_CONVERT_FLOAT: number;

  export const SQL_CONVERT_FUNCTIONS: number;

  export const SQL_CONVERT_INTEGER: number;

  export const SQL_CONVERT_INTERVAL_DAY_TIME: number;

  export const SQL_CONVERT_INTERVAL_YEAR_MONTH: number;

  export const SQL_CONVERT_LONGVARBINARY: number;

  export const SQL_CONVERT_LONGVARCHAR: number;

  export const SQL_CONVERT_NUMERIC: number;

  export const SQL_CONVERT_REAL: number;

  export const SQL_CONVERT_SMALLINT: number;

  export const SQL_CONVERT_TIME: number;

  export const SQL_CONVERT_TIMESTAMP: number;

  export const SQL_CONVERT_TINYINT: number;

  export const SQL_CONVERT_VARBINARY: number;

  export const SQL_CONVERT_VARCHAR: number;

  export const SQL_CONVERT_WCHAR: number;

  export const SQL_CONVERT_WLONGVARCHAR: number;

  export const SQL_CONVERT_WVARCHAR: number;

  export const SQL_CORRELATION_NAME: number;

  export const SQL_CURSOR_COMMIT_BEHAVIOR: number;

  export const SQL_CURSOR_DYNAMIC: number;

  export const SQL_CURSOR_FORWARD_ONLY: number;

  export const SQL_CURSOR_KEYSET_DRIVEN: number;

  export const SQL_CURSOR_ROLLBACK_BEHAVIOR: number;

  export const SQL_CURSOR_SENSITIVE: number;

  export const SQL_CURSOR_STATIC: number;

  export const SQL_CURSOR_TYPE: number;

  export const SQL_CVT_BIGINT: number;

  export const SQL_CVT_BINARY: number;

  export const SQL_CVT_BIT: number;

  export const SQL_CVT_BLOB: number;

  export const SQL_CVT_CHAR: number;

  export const SQL_CVT_CLOB: number;

  export const SQL_CVT_DATE: number;

  export const SQL_CVT_DBCLOB: number;

  export const SQL_CVT_DECFLOAT16: number;

  export const SQL_CVT_DECFLOAT34: number;

  export const SQL_CVT_DECFLOAT7: number;

  export const SQL_CVT_DECIMAL: number;

  export const SQL_CVT_DOUBLE: number;

  export const SQL_CVT_FLOAT: number;

  export const SQL_CVT_INTEGER: number;

  export const SQL_CVT_INTERVAL_DAY_TIME: number;

  export const SQL_CVT_INTERVAL_YEAR_MONTH: number;

  export const SQL_CVT_LONGVARBINARY: number;

  export const SQL_CVT_LONGVARCHAR: number;

  export const SQL_CVT_NUMERIC: number;

  export const SQL_CVT_REAL: number;

  export const SQL_CVT_SMALLINT: number;

  export const SQL_CVT_TIME: number;

  export const SQL_CVT_TIMESTAMP: number;

  export const SQL_CVT_TINYINT: number;

  export const SQL_CVT_VARBINARY: number;

  export const SQL_CVT_VARCHAR: number;

  export const SQL_CVT_WCHAR: number;

  export const SQL_CVT_WLONGVARCHAR: number;

  export const SQL_CVT_WVARCHAR: number;

  export const SQL_C_DEFAULT: number;

  export const SQL_DATABASE_NAME: number;

  export const SQL_DATALINK: number;

  export const SQL_DATASOURCE_NAME: number;

  export const SQL_DATA_AT_EXEC: number;

  export const SQL_DATA_SOURCE_NAME: number;

  export const SQL_DATA_SOURCE_READ_ONLY: number;

  export const SQL_DATE: number;

  export const SQL_DATETIME: number;

  export const SQL_DBCLOB: number;

  export const SQL_DBCLOB_LOCATOR: number;

  export const SQL_DBMS_NAME: number;

  export const SQL_DBMS_VER: number;

  export const SQL_DECFLOAT: number;

  export const SQL_DECIMAL: number;

  export const SQL_DEFAULT: number;

  export const SQL_DEFAULT_PARAM: number;

  export const SQL_DEFAULT_TXN_ISOLATION: number;

  export const SQL_DESCRIBE_PARAMETER: number;

  export const SQL_DESC_ALLOC_AUTO: number;

  export const SQL_DESC_ALLOC_TYPE: number;

  export const SQL_DESC_ALLOC_USER: number;

  export const SQL_DESC_AUTO_INCREMENT: number;

  export const SQL_DESC_BASE_COLUMN: number;

  export const SQL_DESC_BASE_SCHEMA: number;

  export const SQL_DESC_BASE_TABLE: number;

  export const SQL_DESC_COLUMN_CCSID: number;

  export const SQL_DESC_COUNT: number;

  export const SQL_DESC_DATA_PTR: number;

  export const SQL_DESC_DATETIME_INTERVAL_CODE: number;

  export const SQL_DESC_DISPLAY_SIZE: number;

  export const SQL_DESC_INDICATOR_PTR: number;

  export const SQL_DESC_LABEL: number;

  export const SQL_DESC_LENGTH: number;

  export const SQL_DESC_LENGTH_PTR: number;

  export const SQL_DESC_MONEY: number;

  export const SQL_DESC_NAME: number;

  export const SQL_DESC_NULLABLE: number;

  export const SQL_DESC_PRECISION: number;

  export const SQL_DESC_SCALE: number;

  export const SQL_DESC_SEARCHABLE: number;

  export const SQL_DESC_TYPE: number;

  export const SQL_DESC_TYPE_NAME: number;

  export const SQL_DESC_UNNAMED: number;

  export const SQL_DESC_UPDATABLE: number;

  export const SQL_DIAG_AUTOGEN_KEY: number;

  export const SQL_DIAG_CLASS_ORIGIN: number;

  export const SQL_DIAG_CONNECTION_NAME: number;

  export const SQL_DIAG_DYNAMIC_FUNCTION: number;

  export const SQL_DIAG_MESSAGE_TEXT: number;

  export const SQL_DIAG_MESSAGE_TOKENS: number;

  export const SQL_DIAG_NATIVE: number;

  export const SQL_DIAG_NUMBER: number;

  export const SQL_DIAG_RETURNCODE: number;

  export const SQL_DIAG_ROW_COUNT: number;

  export const SQL_DIAG_SERVER_NAME: number;

  export const SQL_DIAG_SQLSTATE: number;

  export const SQL_DIAG_SUBCLASS_ORIGIN: number;

  export const SQL_DOUBLE: number;

  export const SQL_DRIVER_COMPLETE: number;

  export const SQL_DRIVER_COMPLETE_REQUIRED: number;

  export const SQL_DRIVER_NAME: number;

  export const SQL_DRIVER_NOPROMPT: number;

  export const SQL_DRIVER_ODBC_VER: number;

  export const SQL_DRIVER_PROMPT: number;

  export const SQL_DRIVER_VER: number;

  export const SQL_DROP: number;

  export const SQL_ENSURE: number;

  export const SQL_ERROR: number;

  export const SQL_FALSE: number;

  export const SQL_FETCH_ABSOLUTE: number;

  export const SQL_FETCH_FIRST: number;

  export const SQL_FETCH_LAST: number;

  export const SQL_FETCH_NEXT: number;

  export const SQL_FETCH_PRIOR: number;

  export const SQL_FETCH_RELATIVE: number;

  export const SQL_FILE_APPEND: number;

  export const SQL_FILE_CREATE: number;

  export const SQL_FILE_OVERWRITE: number;

  export const SQL_FILE_READ: number;

  export const SQL_FIRST_IO: number;

  export const SQL_FLOAT: number;

  export const SQL_FMT_DMY: number;

  export const SQL_FMT_EUR: number;

  export const SQL_FMT_HMS: number;

  export const SQL_FMT_ISO: number;

  export const SQL_FMT_JIS: number;

  export const SQL_FMT_JOB: number;

  export const SQL_FMT_JUL: number;

  export const SQL_FMT_MDY: number;

  export const SQL_FMT_USA: number;

  export const SQL_FMT_YMD: number;

  export const SQL_FN_CVT_CAST: number;

  export const SQL_FN_CVT_CONVERT: number;

  export const SQL_FN_NUM_ABS: number;

  export const SQL_FN_NUM_ACOS: number;

  export const SQL_FN_NUM_ASIN: number;

  export const SQL_FN_NUM_ATAN: number;

  export const SQL_FN_NUM_ATAN2: number;

  export const SQL_FN_NUM_CEILING: number;

  export const SQL_FN_NUM_COS: number;

  export const SQL_FN_NUM_COT: number;

  export const SQL_FN_NUM_DEGREES: number;

  export const SQL_FN_NUM_EXP: number;

  export const SQL_FN_NUM_FLOOR: number;

  export const SQL_FN_NUM_LOG: number;

  export const SQL_FN_NUM_LOG10: number;

  export const SQL_FN_NUM_MOD: number;

  export const SQL_FN_NUM_PI: number;

  export const SQL_FN_NUM_POWER: number;

  export const SQL_FN_NUM_RADIANS: number;

  export const SQL_FN_NUM_RAND: number;

  export const SQL_FN_NUM_ROUND: number;

  export const SQL_FN_NUM_SIGN: number;

  export const SQL_FN_NUM_SIN: number;

  export const SQL_FN_NUM_SQRT: number;

  export const SQL_FN_NUM_TAN: number;

  export const SQL_FN_NUM_TRUNCATE: number;

  export const SQL_FN_STR_CONCAT: number;

  export const SQL_FN_STR_LCASE: number;

  export const SQL_FN_STR_LENGTH: number;

  export const SQL_FN_STR_LTRIM: number;

  export const SQL_FN_STR_POSITION: number;

  export const SQL_FN_STR_RTRIM: number;

  export const SQL_FN_STR_SUBSTRING: number;

  export const SQL_FN_STR_UCASE: number;

  export const SQL_FN_TD_CURDATE: number;

  export const SQL_FN_TD_CURRENT_DATE: number;

  export const SQL_FN_TD_CURRENT_TIME: number;

  export const SQL_FN_TD_CURRENT_TIMESTAMP: number;

  export const SQL_FN_TD_CURTIME: number;

  export const SQL_FN_TD_DAYNAME: number;

  export const SQL_FN_TD_DAYOFMONTH: number;

  export const SQL_FN_TD_DAYOFWEEK: number;

  export const SQL_FN_TD_DAYOFYEAR: number;

  export const SQL_FN_TD_EXTRACT: number;

  export const SQL_FN_TD_HOUR: number;

  export const SQL_FN_TD_MINUTE: number;

  export const SQL_FN_TD_MONTH: number;

  export const SQL_FN_TD_MONTHNAME: number;

  export const SQL_FN_TD_NOW: number;

  export const SQL_FN_TD_QUARTER: number;

  export const SQL_FN_TD_SECOND: number;

  export const SQL_FN_TD_TIMESTAMPADD: number;

  export const SQL_FN_TD_TIMESTAMPDIFF: number;

  export const SQL_FN_TD_WEEK: number;

  export const SQL_FN_TD_YEAR: number;

  export const SQL_GB_GROUP_BY_CONTAINS_SELECT: number;

  export const SQL_GB_GROUP_BY_EQUALS_SELECT: number;

  export const SQL_GB_NOT_SUPPORTED: number;

  export const SQL_GB_NO_RELATION: number;

  export const SQL_GRAPHIC: number;

  export const SQL_GROUP_BY: number;

  export const SQL_HANDLE_DBC: number;

  export const SQL_HANDLE_DBC_UNICODE: number;

  export const SQL_HANDLE_DESC: number;

  export const SQL_HANDLE_ENV: number;

  export const SQL_HANDLE_STMT: number;

  export const SQL_HEX_IS_BINARY: number;

  export const SQL_HEX_IS_CHAR: number;

  export const SQL_HEX_SORT_SEQUENCE: number;

  export const SQL_IC_LOWER: number;

  export const SQL_IC_MIXED: number;

  export const SQL_IC_SENSITIVE: number;

  export const SQL_IC_UPPER: number;

  export const SQL_IDENTIFIER_CASE: number;

  export const SQL_IDENTIFIER_QUOTE_CHAR: number;

  export const SQL_INDEX_ALL: number;

  export const SQL_INDEX_OTHER: number;

  export const SQL_INDEX_UNIQUE: number;

  export const SQL_INITIALLY_DEFERRED: number;

  export const SQL_INITIALLY_IMMEDIATE: number;

  export const SQL_INSENSITIVE: number;

  export const SQL_INTEGER: number;

  export const SQL_INTEGER_PREC: number;

  export const SQL_INVALID_HANDLE: number;

  export const SQL_JOBRUN_SORT_SEQUENCE: number;

  export const SQL_JOB_SORT_SEQUENCE: number;

  export const SQL_KEYWORDS: number;

  export const SQL_LIKE_ESCAPE_CLAUSE: number;

  export const SQL_LIKE_ONLY: number;

  export const SQL_LOCK_TYPES: number;

  export const SQL_LONGVARBINARY: number;

  export const SQL_LONGVARCHAR: number;

  export const SQL_LONGVARGRAPHIC: number;

  export const SQL_MAX_CATALOG_NAME_LEN: number;

  export const SQL_MAX_COLUMNS_IN_GROUP_BY: number;

  export const SQL_MAX_COLUMNS_IN_INDEX: number;

  export const SQL_MAX_COLUMNS_IN_ORDER_BY: number;

  export const SQL_MAX_COLUMNS_IN_SELECT: number;

  export const SQL_MAX_COLUMNS_IN_TABLE: number;

  export const SQL_MAX_COLUMN_NAME_LEN: number;

  export const SQL_MAX_CONCURRENT_ACTIVITIES: number;

  export const SQL_MAX_CURSOR_NAME_LEN: number;

  export const SQL_MAX_DRIVER_CONNECTIONS: number;

  export const SQL_MAX_MESSAGE_LENGTH: number;

  export const SQL_MAX_OPTION_STRING_LENGTH: number;

  export const SQL_MAX_OWNER_NAME_LEN: number;

  export const SQL_MAX_ROW_SIZE: number;

  export const SQL_MAX_SCHEMA_NAME_LEN: number;

  export const SQL_MAX_STATEMENT_LEN: number;

  export const SQL_MAX_TABLES_IN_SELECT: number;

  export const SQL_MAX_TABLE_NAME_LEN: number;

  export const SQL_MODE_DEFAULT: number;

  export const SQL_MODE_READ_ONLY: number;

  export const SQL_MODE_READ_WRITE: number;

  export const SQL_MULTIPLE_ACTIVE_TXN: number;

  export const SQL_NEED_DATA: number;

  export const SQL_NNC_NON_NULL: number;

  export const SQL_NNC_NULL: number;

  export const SQL_NON_NULLABLE_COLUMNS: number;

  export const SQL_NOT_DEFERRABLE: number;

  export const SQL_NO_ACTION: number;

  export const SQL_NO_DATA: number;

  export const SQL_NO_DATA_FOUND: number;

  export const SQL_NO_NULLS: number;

  export const SQL_NO_TOTAL: number;

  export const SQL_NTS: number;

  export const SQL_NULLABLE: number;

  export const SQL_NULLABLE_UNKNOWN: number;

  export const SQL_NULL_DATA: number;

  export const SQL_NULL_HANDLE: number;

  export const SQL_NUMERIC: number;

  export const SQL_NUMERIC_FUNCTIONS: number;

  export const SQL_OAC_LEVEL1: number;

  export const SQL_OAC_LEVEL2: number;

  export const SQL_OAC_NONE: number;

  export const SQL_ODBC_API_CONFORMANCE: number;

  export const SQL_ODBC_SQL_CONFORMANCE: number;

  export const SQL_ORDER_BY_COLUMNS_IN_SELECT: number;

  export const SQL_OSC_CORE: number;

  export const SQL_OSC_EXTENDED: number;

  export const SQL_OSC_MINIMUM: number;

  export const SQL_OUTER_JOINS: number;

  export const SQL_OU_DML_STATEMENTS: number;

  export const SQL_OU_INDEX_DEFINITION: number;

  export const SQL_OU_PRIVILEGE_DEFINITION: number;

  export const SQL_OU_PROCEDURE_INVOCATION: number;

  export const SQL_OU_TABLE_DEFINITION: number;

  export const SQL_OWNER_TERM: number;

  export const SQL_OWNER_USAGE: number;

  export const SQL_PARAM_INPUT: number;

  export const SQL_PARAM_INPUT_OUTPUT: number;

  export const SQL_PARAM_OUTPUT: number;

  export const SQL_PC_NOT_PSEUDO: number;

  export const SQL_PC_PSEUDO: number;

  export const SQL_PC_UNKNOWN: number;

  export const SQL_POSITIONED_STATEMENTS: number;

  export const SQL_POS_ADD: number;

  export const SQL_POS_DELETE: number;

  export const SQL_POS_OPERATIONS: number;

  export const SQL_POS_POSITION: number;

  export const SQL_POS_REFRESH: number;

  export const SQL_POS_UPDATE: number;

  export const SQL_PROCEDURES: number;

  export const SQL_PROCEDURE_TERM: number;

  export const SQL_PS_POSITIONED_DELETE: number;

  export const SQL_PS_POSITIONED_UPDATE: number;

  export const SQL_PS_SELECT_FOR_UPDATE: number;

  export const SQL_PT_FUNCTION: number;

  export const SQL_PT_PROCEDURE: number;

  export const SQL_PT_UNKNOWN: number;

  export const SQL_QL_END: number;

  export const SQL_QL_START: number;

  export const SQL_QUALIFIER_LOCATION: number;

  export const SQL_QUALIFIER_NAME_SEPARATOR: number;

  export const SQL_QUALIFIER_TERM: number;

  export const SQL_QUALIFIER_USAGE: number;

  export const SQL_QUICK: number;

  export const SQL_QUOTED_IDENTIFIER_CASE: number;

  export const SQL_QU_DML_STATEMENTS: number;

  export const SQL_QU_INDEX_DEFINITION: number;

  export const SQL_QU_NOT_SUPPORTED: number;

  export const SQL_QU_PRIVILEGE_DEFINITION: number;

  export const SQL_QU_PROCEDURE_INVOCATION: number;

  export const SQL_QU_TABLE_DEFINITION: number;

  export const SQL_REAL: number;

  export const SQL_RESET_PARAMS: number;

  export const SQL_RESTRICT: number;

  export const SQL_ROLLBACK: number;

  export const SQL_ROLLBACK_HOLD: number;

  export const SQL_ROWSET_SIZE: number;

  export const SQL_SAVEPOINT_NAME_RELEASE: number;

  export const SQL_SAVEPOINT_NAME_ROLLBACK: number;

  export const SQL_SCHEMA_TERM: number;

  export const SQL_SCHEMA_USAGE: number;

  export const SQL_SCOPE_CURROW: number;

  export const SQL_SCOPE_SESSION: number;

  export const SQL_SCOPE_TRANSACTION: number;

  export const SQL_SC_FIPS127_2_TRANSITIONAL: number;

  export const SQL_SC_SQL92_ENTRY: number;

  export const SQL_SC_SQL92_FULL: number;

  export const SQL_SC_SQL92_INTERMEDIATE: number;

  export const SQL_SEARCHABLE: number;

  export const SQL_SEARCH_PATTERN_ESCAPE: number;

  export const SQL_SENSITIVE: number;

  export const SQL_SEP_BLANK: number;

  export const SQL_SEP_COLON: number;

  export const SQL_SEP_COMMA: number;

  export const SQL_SEP_DASH: number;

  export const SQL_SEP_JOB: number;

  export const SQL_SEP_PERIOD: number;

  export const SQL_SEP_SLASH: number;

  export const SQL_SET_DEFAULT: number;

  export const SQL_SET_NULL: number;

  export const SQL_SKIP_LOCKED_DATA: number;

  export const SQL_SMALLINT: number;

  export const SQL_SMALLINT_PREC: number;

  export const SQL_SP_BETWEEN: number;

  export const SQL_SP_COMPARISON: number;

  export const SQL_SP_EXISTS: number;

  export const SQL_SP_IN: number;

  export const SQL_SP_ISNOTNULL: number;

  export const SQL_SP_ISNULL: number;

  export const SQL_SP_LIKE: number;

  export const SQL_SP_MATCH_FULL: number;

  export const SQL_SP_MATCH_PARTIAL: number;

  export const SQL_SP_MATCH_UNIQUE_FULL: number;

  export const SQL_SP_MATCH_UNIQUE_PARTIAL: number;

  export const SQL_SP_OVERLAPS: number;

  export const SQL_SP_QUANTIFIED_COMPARISON: number;

  export const SQL_SP_UNIQUE: number;

  export const SQL_SQL92_PREDICATES: number;

  export const SQL_SQL92_VALUE_EXPRESSIONS: number;

  export const SQL_SQLSTATE_SIZE: number;

  export const SQL_SQL_CONFORMANCE: number;

  export const SQL_STILL_EXECUTING: number;

  export const SQL_STRING_FUNCTIONS: number;

  export const SQL_SUCCESS: number;

  export const SQL_SUCCESS_WITH_INFO: number;

  export const SQL_SVE_CASE: number;

  export const SQL_SVE_CAST: number;

  export const SQL_SVE_COALESCE: number;

  export const SQL_SVE_NULLIF: number;

  export const SQL_TABLE_STAT: number;

  export const SQL_TC_ALL: number;

  export const SQL_TC_DDL_COMMIT: number;

  export const SQL_TC_DDL_IGNORE: number;

  export const SQL_TC_DML: number;

  export const SQL_TC_NONE: number;

  export const SQL_TIME: number;

  export const SQL_TIMEDATE_FUNCTIONS: number;

  export const SQL_TIMESTAMP: number;

  export const SQL_TRUE: number;

  export const SQL_TXN_CAPABLE: number;

  export const SQL_TXN_CLEAR: number;

  export const SQL_TXN_CREATE: number;

  export const SQL_TXN_END: number;

  export const SQL_TXN_END_FAIL: number;

  export const SQL_TXN_FIND: number;

  export const SQL_TXN_HOLD: number;

  export const SQL_TXN_ISOLATION: number;

  export const SQL_TXN_NOCOMMIT: number;

  export const SQL_TXN_NO_COMMIT: number;

  export const SQL_TXN_READ_COMMITTED: number;

  export const SQL_TXN_READ_COMMITTED_MASK: number;

  export const SQL_TXN_READ_UNCOMMITTED: number;

  export const SQL_TXN_READ_UNCOMMITTED_MASK: number;

  export const SQL_TXN_REPEATABLE_READ: number;

  export const SQL_TXN_REPEATABLE_READ_MASK: number;

  export const SQL_TXN_RESUME: number;

  export const SQL_TXN_SERIALIZABLE: number;

  export const SQL_TXN_SERIALIZABLE_MASK: number;

  export const SQL_TYPE_DATE: number;

  export const SQL_TYPE_TIME: number;

  export const SQL_TYPE_TIMESTAMP: number;

  export const SQL_UNASSIGNED: number;

  export const SQL_UNBIND: number;

  export const SQL_UNSEARCHABLE: number;

  export const SQL_UNSPECIFIED: number;

  export const SQL_UNUSED: number;

  export const SQL_USER_NAME: number;

  export const SQL_USE_CURRENTLY_COMMITTED: number;

  export const SQL_UTF8_CHAR: number;

  export const SQL_VARBINARY: number;

  export const SQL_VARCHAR: number;

  export const SQL_VARGRAPHIC: number;

  export const SQL_WAIT_FOR_OUTCOME: number;

  export const SQL_WCHAR: number;

  export const SQL_WLONGVARCHAR: number;

  export const SQL_WVARCHAR: number;

  export const SQL_XML: number;

  export namespace dbconn {
    function close(): any;

    function conn(): any;

    function debug(): any;

    function disconn(): any;

    function getConnAttr(): any;

    function isConnected(): any;

    function setConnAttr(): any;

    function validStmt(): any;
  }

  export namespace dbstmt {
    function bindParam(): any;

    function bindParamSync(): any;

    function close(): any;

    function closeCursor(): any;

    function commit(): any;

    function exec(): any;

    function execSync(): any;

    function execute(): any;

    function executeSync(): any;

    function fetch(): any;

    function fetchAll(): any;

    function fetchAllSync(): any;

    function fetchSync(): any;

    function fieldName(): any;

    function fieldNullable(): any;

    function fieldPrecise(): any;

    function fieldScale(): any;

    function fieldType(): any;

    function fieldWidth(): any;

    function getStmtAttr(): any;

    function nextResult(): any;

    function numFields(): any;

    function numRows(): any;

    function prepare(): any;

    function prepareSync(): any;

    function reset(): any;

    function rollback(): any;

    function setStmtAttr(): any;

    function stmtError(): any;
  }
}
