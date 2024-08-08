-- CreateEnum
CREATE TYPE "Type" AS ENUM ('Politics', 'Science', 'Weather', 'Aliens', 'Aviation', 'Society', 'Medicine', 'Religion');

-- AlterTable
ALTER TABLE "theory" ADD COLUMN     "type" "Type" NOT NULL DEFAULT 'Politics';
