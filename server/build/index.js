"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const database_1 = require("./database");
//import { schema } from "./graphql";
const graphql_1 = require("./graphql");
const mount = (app) => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield database_1.connectDatabase();
    const server = new apollo_server_express_1.ApolloServer({
        typeDefs: graphql_1.typeDefs,
        resolvers: graphql_1.resolvers,
        context: () => ({ db }),
    });
    server.applyMiddleware({ app, path: "/api" });
    app.listen(process.env.PORT);
    console.log(`[app] : http://localhost:${process.env.PORT}`);
    // const listings = await db.listings.find({}).toArray();
    // console.log(listings[0]);
});
mount(express_1.default());
