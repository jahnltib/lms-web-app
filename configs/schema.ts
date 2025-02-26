import { 
  pgTable, 
  uuid, 
  text, 
  bigint, 
  timestamp, 
  integer, 
  varchar, 
  boolean, 
  primaryKey 
} from "drizzle-orm/pg-core";

// Users Table
export const users = pgTable("users", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name", { length: 255 }).notNull(),
  age: integer("age").notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  isMember: boolean("is_member").default(false),
});

// Base Content Table
export const content = pgTable("content", {
  contentId: uuid("content_id").primaryKey().defaultRandom(),
  slug: text("slug").unique().notNull(),
  type: text("type").notNull().$type<"flashcard_set" | "summary" | "quiz">(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  deletedAt: timestamp("deleted_at", { withTimezone: true }),
});

// Flashcards Schema
export const flashcardSets = pgTable("flashcard_sets", {
  setId: uuid("set_id").primaryKey().defaultRandom(),
  contentId: uuid("content_id").unique().notNull().references(() => content.contentId, { onDelete: "cascade" }),
  title: text("title").notNull(),
  description: text("description"),
});

export const flashcards = pgTable("flashcards", {
  flashcardId: uuid("flashcard_id").primaryKey().defaultRandom(),
  setId: uuid("set_id").notNull().references(() => flashcardSets.setId, { onDelete: "cascade" }),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
});

// Summaries Schema
export const summaries = pgTable("summaries", {
  summaryId: uuid("summary_id").primaryKey().defaultRandom(),
  contentId: uuid("content_id").unique().notNull().references(() => content.contentId, { onDelete: "cascade" }),
  text: text("text").notNull(),
});

// Quizzes Schema
export const quizzes = pgTable("quizzes", {
  quizId: uuid("quiz_id").primaryKey().defaultRandom(),
  contentId: uuid("content_id").unique().notNull().references(() => content.contentId, { onDelete: "cascade" }),
  title: text("title").notNull(),
  description: text("description"),
});

export const questions = pgTable("questions", {
  questionId: uuid("question_id").primaryKey().defaultRandom(),
  quizId: uuid("quiz_id").notNull().references(() => quizzes.quizId, { onDelete: "cascade" }),
  questionText: text("question_text").notNull(),
});

export const answers = pgTable("answers", {
  answerId: uuid("answer_id").primaryKey().defaultRandom(),
  questionId: uuid("question_id").notNull().references(() => questions.questionId, { onDelete: "cascade" }),
  answerText: text("answer_text").notNull(),
});

export const correctAnswers = pgTable("correct_answers", {
  correctAnswerId: uuid("correct_answer_id").primaryKey().defaultRandom(),
  questionId: uuid("question_id").notNull().references(() => questions.questionId, { onDelete: "cascade" }),
  answerId: uuid("answer_id").notNull().references(() => answers.answerId, { onDelete: "cascade" }),
});

// Blob Storage Schema
export const contentBlobs = pgTable("content_blobs", {
  blobId: uuid("blob_id").primaryKey().defaultRandom(),
  contentId: uuid("content_id").notNull().references(() => content.contentId, { onDelete: "cascade" }),
  fileName: text("file_name").notNull(),
  fileType: text("file_type").notNull(),
  storageUrl: text("storage_url").unique().notNull(),
  fileSize: bigint("file_size", { mode: "number" }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  deletedAt: timestamp("deleted_at", { withTimezone: true }),
});
