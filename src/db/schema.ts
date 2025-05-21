import { relations } from "drizzle-orm";
import { boolean, integer, pgTable, serial,text, timestamp, varchar, } from "drizzle-orm/pg-core";


 export const customers=pgTable("customers", {
    id: serial("id").primaryKey(),
    firstname: varchar("first_name").notNull(),
    lastname:  varchar("last_name").notNull(),
    email: varchar("email").notNull().unique(),
    phone: varchar("phone").notNull().unique(),
    address1: varchar("address1").notNull(),
    address2: varchar("address2"),
    city: varchar("city").notNull(),
    state: varchar("state", {length: 2}).notNull(),
    zip: varchar("zip", {length: 10}).notNull(),
    notes: text("notes"),
    active: boolean("active").default(true).notNull(),
    created_at: timestamp("created_at").defaultNow().notNull(),
    updated_at: timestamp("updated_at").defaultNow().notNull().$onUpdate(() => new Date()),
 })
 ///first_name, last_name, email, phone, address1, address2, city, state, zip, notes, active, created_at, updated_at
 
 export const tickets=pgTable("tickets", {
    id: serial("id").primaryKey(),
    customer_id: integer("customer_id").notNull().references(() => customers.id),
    title: varchar("title").notNull(),
    description: text("description").notNull(),
    completed: boolean("completed").default(false).notNull(),
    tech: varchar("tech").notNull().default("unassigned"),
    created_at: timestamp("created_at").defaultNow().notNull(),
    updated_at: timestamp("updated_at").defaultNow().notNull().$onUpdate(() => new Date()),
 })
export const CustomerRelations=relations(customers, ({many}) => ({
    tickets: many(tickets),
}))
export const TicketRelations=relations(tickets, ({one}) => ({
    customer: one(customers, {
        fields: [tickets.customer_id],
        references: [customers.id],
    }),
}))


