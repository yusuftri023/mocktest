-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "task_name" TEXT NOT NULL,
    "task_status" TEXT NOT NULL,
    "poster_id" INTEGER NOT NULL,
    "created" TIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_poster_id_fkey" FOREIGN KEY ("poster_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
