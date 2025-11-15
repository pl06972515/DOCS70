<h1 align="center">[ 基本 ] 微服务概述</h1>
<p align="center">
</p><br/>



>[!WARNING|style: flat|label: 简要说明 ]
>
><span style='color:Blue'>[ 单体架构 ]</span> 任何功能模块都在一个进程、一个项目中实现 <span style='color:Blue'>( 适合小型、初创项目，开发简单、部署方便 )</span>
>
>- <span style='color:red'>随着业务增长，代码库变得庞大 ( 代码复杂度高 → 代码难以理解 → 代码质量变低 ) [ 最终导致：恶性循环( 屎山代码 ) - 开发协作困难 ]</span>
>
>- <span style='color:red'>交付效率低：伸缩性差( 横向扩展 )，单点故障( 可靠性差 - 影响整体系统 )， 部署风险高( 任何小改动都需整体发布 )</span>
>- <span style='color:red'>[ 阻碍技术创新：技术栈单一 ]</span>
>
>---
>
>
>
><span style='color:Blue'>[ 微服务架构`Microservices Architecture`]</span> 是现代软件开发中非常流行的一种 [ 架构风格 ]
>
><span style='color:red'>[ 微服务架构的出现，是软件系统规模、复杂度、业务敏捷性和技术多样性等多方面需求推动的结果 - 它不是一蹴而就的，而是从单体、`SOA`架构等逐步演变而来 ]</span>
>
>- <span style='color:red'>将单体应用拆分为一组小型、自治、独立部署的服务</span>
>- <span style='color:red'>每个服务：围绕特定业务能力构建 [ 相关或相互依赖 ]</span>
>
>- <span style='color:red'>每个服务：可独立开发、测试、部署、扩展 [ 甚至使用不同技术栈实现 ]</span>
>
>  <span style='color:Blue'>[ 服务间通讯通过轻量级协议：如`HTTP, REST, GRPC, MQ`等技术 ]</span>
>
>  <br/>
>
><span style='color:RED'>[ 优势 + 缺点 ] </span>
>
>- 高内聚、低耦合 [ 提高团队开发效率 + 系统可靠性 ]
>- 持续交付和自动化部署 [ 按需扩展，资源利用率高 ]
>- 容错性好 [ 单个服务故障不会影响整体系统 ]
>
>⚠ <span style='color:red'>[`A`] 服务膨胀：服务`A`→ 服务`B`→ 服务`C`[ 难以调试，整体响应延迟增高 ]</span>
>
>⚠ <span style='color:red'>[`B`] 复杂挑战：分布式系统存在相应的复杂度 ( 如服务治理、数据一致性、运维监控等 ) [ 可通过技术去优化 ]</span>
>
><br/>

