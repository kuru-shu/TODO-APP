import CompletedList from '@/components/completed/completedList';
import AddTodo from '@/components/todo/addTodo';
import TodoList from '@/components/todo/todoList';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Home() {
  return (
    <div>
      <Tabs defaultValue="TODO_LIST" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="TODO_LIST">TODO</TabsTrigger>
          <TabsTrigger value="COMPLETED_LIST">COMPLETED</TabsTrigger>
        </TabsList>
        <TabsContent value="TODO_LIST">
          <Card>
            <CardHeader>
              <CardTitle>TODOリスト</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <TodoList />
              <AddTodo />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="COMPLETED_LIST">
          <Card>
            <CardHeader>
              <CardTitle>完了リスト</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <CompletedList />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
