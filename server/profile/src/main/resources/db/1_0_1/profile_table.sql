--liquibase formatted sql

CREATE SEQUENCE s_profile_id
    START WITH 100000
    INCREMENT BY 10
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE TABLE "profile" (
    id BIGINT PRIMARY KEY DEFAULT nextval('s_profile_id'),
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50),
    is_author BOOLEAN DEFAULT FALSE
);