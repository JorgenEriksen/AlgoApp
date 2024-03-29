﻿// <auto-generated />
using CodeBattle_API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace CodeBattle_API.Migrations
{
    [DbContext(typeof(CodeBattleContext))]
    [Migration("20210912193734_InitMigration")]
    partial class InitMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.9")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("CodeBattle_API.Models.ProgrammingLanguage", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Language")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("ProgrammingLanguage");
                });

            modelBuilder.Entity("CodeBattle_API.Models.Question", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Answer")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("AnswerAlternative1")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("AnswerAlternative2")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("AnswerAlternative3")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("AnswerExplanation")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Code")
                        .HasColumnType("nvarchar(max)");

                    b.Property<long>("ProgrammingLanguageId")
                        .HasColumnType("bigint");

                    b.Property<int>("Time")
                        .HasColumnType("int");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("ProgrammingLanguageId");

                    b.ToTable("Question");
                });

            modelBuilder.Entity("CodeBattle_API.Models.Question", b =>
                {
                    b.HasOne("CodeBattle_API.Models.ProgrammingLanguage", "ProgrammingLanguage")
                        .WithMany()
                        .HasForeignKey("ProgrammingLanguageId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("ProgrammingLanguage");
                });
#pragma warning restore 612, 618
        }
    }
}
