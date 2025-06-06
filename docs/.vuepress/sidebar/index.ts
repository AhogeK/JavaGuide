import { sidebar } from "vuepress-theme-hope";

import { aboutTheAuthor } from "./about-the-author.js";
import { books } from "./books.js";
import { highQualityTechnicalArticles } from "./high-quality-technical-articles.js";
import { openSourceProject } from "./open-source-project.js";

export default sidebar({
  // 应该把更精确的路径放置在前边
  "/open-source-project/": openSourceProject,
  "/books/": books,
  "/about-the-author/": aboutTheAuthor,
  "/high-quality-technical-articles/": highQualityTechnicalArticles,
  "/zhuanlan/": [
    "java-mian-shi-zhi-bei",
    "back-end-interview-high-frequency-system-design-and-scenario-questions",
    "handwritten-rpc-framework",
    "source-code-reading",
  ],
  // 必须放在最后面
  "/": [
    {
      text: "项目介绍",
      icon: "star",
      collapsible: true,
      prefix: "javaguide/",
      children: ["intro", "use-suggestion", "contribution-guideline", "faq"],
    },
    {
      text: "面试准备（必看）",
      icon: "interview",
      collapsible: true,
      prefix: "interview-preparation/",
      children: [
        "teach-you-how-to-prepare-for-the-interview-hand-in-hand",
        "resume-guide",
        "key-points-of-interview",
        "java-roadmap",
        "project-experience-guide",
        "how-to-handle-interview-nerves",
        "internship-experience",
      ],
    },
    {
      text: "Java",
      icon: "java",
      collapsible: true,
      prefix: "java/",
      children: [
        {
          text: "基础",
          prefix: "basis/",
          icon: "basic",
          children: [
            "java-basic-questions-01",
            "java-basic-questions-02",
            "java-basic-questions-03",
            {
              text: "重要知识点",
              icon: "star",
              collapsible: true,
              children: [
                "why-there-only-value-passing-in-java",
                "serialization",
                "generics-and-wildcards",
                "reflection",
                "proxy",
                "bigdecimal",
                "unsafe",
                "spi",
                "syntactic-sugar",
              ],
            },
          ],
        },
        {
          text: "集合",
          prefix: "collection/",
          icon: "container",
          children: [
            "java-collection-questions-01",
            "java-collection-questions-02",
            "java-collection-precautions-for-use",
            {
              text: "源码分析",
              icon: "star",
              collapsible: true,
              children: [
                "arraylist-source-code",
                "linkedlist-source-code",
                "hashmap-source-code",
                "concurrent-hash-map-source-code",
                "linkedhashmap-source-code",
                "copyonwritearraylist-source-code",
                "arrayblockingqueue-source-code",
                "priorityqueue-source-code",
                "delayqueue-source-code",
              ],
            },
          ],
        },
        {
          text: "并发编程",
          prefix: "concurrent/",
          icon: "et-performance",
          children: [
            "java-concurrent-questions-01",
            "java-concurrent-questions-02",
            "java-concurrent-questions-03",
            {
              text: "重要知识点",
              icon: "star",
              collapsible: true,
              children: [
                "optimistic-lock-and-pessimistic-lock",
                "cas",
                "jmm",
                "java-thread-pool-summary",
                "java-thread-pool-best-practices",
                "java-concurrent-collections",
                "aqs",
                "atomic-classes",
                "threadlocal",
                "completablefuture-intro",
                "virtual-thread",
              ],
            },
          ],
        },
        {
          text: "IO",
          prefix: "io/",
          icon: "code",
          collapsible: true,
          children: ["io-basis", "io-design-patterns", "io-model", "nio-basis"],
        },
        {
          text: "JVM",
          prefix: "jvm/",
          icon: "virtual_machine",
          collapsible: true,
          children: [
            "memory-area",
            "jvm-garbage-collection",
            "class-file-structure",
            "class-loading-process",
            "classloader",
            "jvm-parameters-intro",
            "jdk-monitoring-and-troubleshooting-tools",
            "jvm-in-action",
          ],
        },
        {
          text: "新特性",
          prefix: "new-features/",
          icon: "featured",
          collapsible: true,
          children: [
            "java8-common-new-features",
            "java8-tutorial-translate",
            "java9",
            "java10",
            "java11",
            "java12-13",
            "java14-15",
            "java16",
            "java17",
            "java18",
            "java19",
            "java20",
            "java21",
            "java22-23",
            "java24",
          ],
        },
      ],
    },
    {
      text: "计算机基础",
      icon: "computer",
      prefix: "cs-basics/",
      collapsible: true,
      children: [
        {
          text: "网络",
          prefix: "network/",
          icon: "network",
          children: [
            "other-network-questions",
            "other-network-questions2",
            // "computer-network-xiexiren-summary",
            {
              text: "重要知识点",
              icon: "star",
              collapsible: true,
              children: [
                "osi-and-tcp-ip-model",
                "the-whole-process-of-accessing-web-pages",
                "application-layer-protocol",
                "http-vs-https",
                "http1.0-vs-http1.1",
                "http-status-codes",
                "dns",
                "tcp-connection-and-disconnection",
                "tcp-reliability-guarantee",
                "arp",
                "nat",
                "network-attack-means",
              ],
            },
          ],
        },
        {
          text: "操作系统",
          prefix: "operating-system/",
          icon: "caozuoxitong",
          children: [
            "operating-system-basic-questions-01",
            "operating-system-basic-questions-02",
            {
              text: "Linux",
              collapsible: true,
              icon: "linux",
              children: ["linux-intro", "shell-intro"],
            },
          ],
        },
        {
          text: "数据结构",
          prefix: "data-structure/",
          icon: "people-network-full",
          collapsible: true,
          children: [
            "linear-data-structure",
            "graph",
            "heap",
            "tree",
            "red-black-tree",
            "bloom-filter",
          ],
        },
        {
          text: "算法",
          prefix: "algorithms/",
          icon: "suanfaku",
          collapsible: true,
          children: [
            "classical-algorithm-problems-recommendations",
            "common-data-structures-leetcode-recommendations",
            "string-algorithm-problems",
            "linkedlist-algorithm-problems",
            "the-sword-refers-to-offer",
            "10-classical-sorting-algorithms",
          ],
        },
      ],
    },
    {
      text: "数据库",
      icon: "database",
      prefix: "database/",
      collapsible: true,
      children: [
        {
          text: "基础",
          icon: "basic",
          children: [
            "basis",
            "nosql",
            "character-set",
            {
              text: "SQL",
              icon: "SQL",
              prefix: "sql/",
              collapsible: true,
              children: [
                "sql-syntax-summary",
                "sql-questions-01",
                "sql-questions-02",
                "sql-questions-03",
                "sql-questions-04",
                "sql-questions-05",
              ],
            },
          ],
        },
        {
          text: "MySQL",
          prefix: "mysql/",
          icon: "mysql",
          children: [
            "mysql-questions-01",
            "mysql-high-performance-optimization-specification-recommendations",
            {
              text: "重要知识点",
              icon: "star",
              collapsible: true,
              children: [
                "mysql-index",
                {
                  text: "MySQL三大日志详解",
                  link: "mysql-logs",
                },
                "transaction-isolation-level",
                "innodb-implementation-of-mvcc",
                "how-sql-executed-in-mysql",
                "mysql-query-cache",
                "mysql-query-execution-plan",
                "mysql-auto-increment-primary-key-continuous",
                "some-thoughts-on-database-storage-time",
                "index-invalidation-caused-by-implicit-conversion",
              ],
            },
          ],
        },
        {
          text: "Redis",
          prefix: "redis/",
          icon: "redis",
          children: [
            "cache-basics",
            "redis-questions-01",
            "redis-questions-02",
            {
              text: "重要知识点",
              icon: "star",
              collapsible: true,
              children: [
                "redis-delayed-task",
                "3-commonly-used-cache-read-and-write-strategies",
                "redis-data-structures-01",
                "redis-data-structures-02",
                "redis-skiplist",
                "redis-persistence",
                "redis-memory-fragmentation",
                "redis-common-blocking-problems-summary",
                "redis-cluster",
              ],
            },
          ],
        },
        {
          text: "Elasticsearch",
          prefix: "elasticsearch/",
          icon: "elasticsearch",
          collapsible: true,
          children: ["elasticsearch-questions-01"],
        },
        {
          text: "MongoDB",
          prefix: "mongodb/",
          icon: "mongodb",
          collapsible: true,
          children: ["mongodb-questions-01", "mongodb-questions-02"],
        },
      ],
    },
    {
      text: "开发工具",
      icon: "tool",
      prefix: "tools/",
      collapsible: true,
      children: [
        {
          text: "Maven",
          icon: "configuration",
          prefix: "maven/",
          children: ["maven-core-concepts", "maven-best-practices"],
        },
        {
          text: "Gradle",
          icon: "gradle",
          prefix: "gradle/",
          children: ["gradle-core-concepts"],
        },
        {
          text: "Git",
          icon: "git",
          prefix: "git/",
          children: ["git-intro", "github-tips"],
        },
        {
          text: "Docker",
          icon: "docker1",
          prefix: "docker/",
          children: ["docker-intro", "docker-in-action"],
        },
        {
          text: "IDEA",
          icon: "intellijidea",
          link: "https://gitee.com/SnailClimb/awesome-idea-tutorial",
        },
      ],
    },
    {
      text: "常用框架",
      prefix: "system-design/framework/",
      icon: "component",
      collapsible: true,
      children: [
        {
          text: "Spring&Spring Boot",
          icon: "bxl-spring-boot",
          prefix: "spring/",
          children: [
            "spring-knowledge-and-questions-summary",
            "springboot-knowledge-and-questions-summary",
            "spring-common-annotations",
            "springboot-source-code",
            {
              text: "重要知识点",
              icon: "star",
              collapsible: true,
              children: [
                "ioc-and-aop",
                "spring-transaction",
                "spring-design-patterns-summary",
                "spring-boot-auto-assembly-principles",
                "async",
              ],
            },
          ],
        },
        "mybatis/mybatis-interview",
        "netty",
      ],
    },
    {
      text: "系统设计",
      icon: "design",
      prefix: "system-design/",
      collapsible: true,
      children: [
        {
          text: "基础知识",
          prefix: "basis/",
          icon: "basic",
          collapsible: true,
          children: [
            "RESTfulAPI",
            "software-engineering",
            "naming",
            "refactoring",
            {
              text: "单元测试指南",
              link: "unit-test",
            },
          ],
        },
        {
          text: "认证授权",
          prefix: "security/",
          icon: "security-fill",
          collapsible: true,
          children: [
            "basis-of-authority-certification",
            "jwt-intro",
            "advantages-and-disadvantages-of-jwt",
            "sso-intro",
            "design-of-authority-system",
          ],
        },
        {
          text: "数据安全",
          prefix: "security/",
          icon: "security-fill",
          collapsible: true,
          children: [
            "encryption-algorithms",
            "sentive-words-filter",
            "data-desensitization",
            "data-validation",
          ],
        },
        "system-design-questions",
        "design-pattern",
        "schedule-task",
        "web-real-time-message-push",
      ],
    },
    {
      text: "分布式",
      icon: "distributed-network",
      prefix: "distributed-system/",
      collapsible: true,
      children: [
        {
          text: "理论&算法&协议",
          icon: "suanfaku",
          prefix: "protocol/",
          collapsible: true,
          children: [
            "cap-and-base-theorem",
            "paxos-algorithm",
            "raft-algorithm",
            "gossip-protocl",
          ],
        },
        {
          text: "API网关",
          icon: "gateway",
          children: ["api-gateway", "spring-cloud-gateway-questions"],
        },
        {
          text: "分布式ID",
          icon: "id",
          children: ["distributed-id", "distributed-id-design"],
        },
        {
          text: "分布式锁",
          icon: "lock",
          children: ["distributed-lock", "distributed-lock-implementations"],
        },
        {
          text: "分布式事务",
          icon: "transanction",
          children: ["distributed-transaction"],
        },
        {
          text: "分布式配置中心",
          icon: "configuration",
          children: ["distributed-configuration-center"],
        },
        {
          text: "RPC",
          prefix: "rpc/",
          icon: "network",
          collapsible: true,
          children: ["rpc-intro", "dubbo"],
        },
        {
          text: "ZooKeeper",
          prefix: "distributed-process-coordination/zookeeper/",
          icon: "framework",
          collapsible: true,
          children: ["zookeeper-intro", "zookeeper-plus"],
        },
      ],
    },
    {
      text: "高性能",
      icon: "et-performance",
      prefix: "high-performance/",
      collapsible: true,
      children: [
        {
          text: "CDN",
          icon: "cdn",
          children: ["cdn"],
        },
        {
          text: "负载均衡",
          icon: "fuzaijunheng",
          children: ["load-balancing"],
        },
        {
          text: "数据库优化",
          icon: "mysql",
          children: [
            "read-and-write-separation-and-library-subtable",
            "data-cold-hot-separation",
            "sql-optimization",
            "deep-pagination-optimization",
          ],
        },
        {
          text: "消息队列",
          prefix: "message-queue/",
          icon: "MQ",
          collapsible: true,
          children: [
            "message-queue",
            "disruptor-questions",
            "kafka-questions-01",
            "rocketmq-questions",
            "rabbitmq-questions",
          ],
        },
      ],
    },
    {
      text: "高可用",
      icon: "highavailable",
      prefix: "high-availability/",
      collapsible: true,
      children: [
        "high-availability-system-design",
        "idempotency",
        "redundancy",
        "limit-request",
        "fallback-and-circuit-breaker",
        "timeout-and-retry",
        "performance-test",
      ],
    },
  ],
});
