-- CreateTable
CREATE TABLE "replies" (
    "id" TEXT NOT NULL,
    "reply" TEXT NOT NULL,
    "replier_id" TEXT NOT NULL,
    "comment_id" TEXT NOT NULL,

    CONSTRAINT "replies_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "replies" ADD CONSTRAINT "replies_replier_id_fkey" FOREIGN KEY ("replier_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "replies" ADD CONSTRAINT "replies_comment_id_fkey" FOREIGN KEY ("comment_id") REFERENCES "comments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
