CREATE
OR REPLACE PROCEDURE PISSUE147 (
    INOUT programm CHAR(20),
    INOUT Fehlernummer dec(5, 0),
    INOUT Fehlertext CHAR(100),
    INOUT Programmnummer dec(7, 0),
    INOUT xmldaten varchar(32000)
) LANGUAGE RPGLE SPECIFIC PISSUE147 NOT DETERMINISTIC MODIFIES SQL DATA CALLED ON NULL INPUT PARAMETER STYLE SQL