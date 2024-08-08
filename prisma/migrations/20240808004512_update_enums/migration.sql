/*
  Warnings:

  - The values [Aviation] on the enum `Type` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Type_new" AS ENUM ('Politics', 'Science', 'Weather', 'Aliens', 'Space', 'Society', 'Medicine', 'Religion', 'CoverUps');
ALTER TABLE "theory" ALTER COLUMN "type" DROP DEFAULT;
ALTER TABLE "theory" ALTER COLUMN "type" TYPE "Type_new" USING ("type"::text::"Type_new");
ALTER TYPE "Type" RENAME TO "Type_old";
ALTER TYPE "Type_new" RENAME TO "Type";
DROP TYPE "Type_old";
ALTER TABLE "theory" ALTER COLUMN "type" SET DEFAULT 'Politics';
COMMIT;
