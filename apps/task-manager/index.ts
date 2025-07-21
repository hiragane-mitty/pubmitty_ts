// 4つのクラスを連携させて動かすサンプルアプリ
import { User } from './User';
import { TaskService } from './TaskService';
import { Logger } from './Logger';

const logger = Logger.instance;
const user = new User(1, 'ご主人');
const service = new TaskService();

logger.log(`${user.name}のタスク管理アプリ起動やで！`);

const task1 = service.addTask('TypeScript勉強', '型とクラスを学ぶ');
const task2 = service.addTask('おやつタイム', 'チョコを食べる');

logger.log(`タスク追加: ${task1.title}, ${task2.title}`);

service.updateTaskStatus(task1.id, 'doing');
logger.log(`タスク「${task1.title}」の状態をdoingに変更`);

user.name = 'みってぃ';
logger.log(`ユーザー名を${user.name}に変更したで！`);

logger.log('現在のタスク一覧:');
for (const t of service.getTasks()) {
  logger.log(`${t.id}: ${t.title} [${t.status}] - ${t.detail}`);
}
