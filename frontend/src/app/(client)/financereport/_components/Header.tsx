"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Header = () => {
  return (
    <div className=" min-h-screen bg-slate-50 p-8">
      <div className="flex items-center justify-between mb-8">
        <div className="font-semibold text-lg">FlowAI Portal</div>

        <div className="flex gap-6 items-center text-sm">
          <span className="text-gray-500">Хяналтын самбар</span>
          <span className="font-semibold text-indigo-600">Тайлангууд</span>
          <span className="text-gray-500">Тохиргоо</span>

          <Button className="bg-gradient-to-r rounded-full from-indigo-500 to-purple-600 text-white">
            PDF татах
          </Button>
        </div>
      </div>

      <Card className="max-w-8xl mx-auto shadow-lg ">
        <CardContent className="">
          <div className="flex justify-between mb-10">
            <div>
              <p className="text-indigo-600 font-semibold mb-2">FlowAI</p>

              <h1 className="text-3xl font-bold mb-2">
                Сар бүрийн санхүүгийн тайлан
              </h1>

              <p className="text-gray-500 text-sm">
                Тайлант хугацаа: 2026 оны 3-р сарын 1 – 2026 оны 3-р сарын 31
              </p>
            </div>

            <div className="text-sm text-gray-500 space-y-2">
              <p>Үүсгэсэн огноо</p>
              <p className="font-semibold text-black">2026.03.01</p>

              <p className="mt-4">Тайлангийн ID</p>
              <p className="font-semibold text-black">#FIN-2026-03-SAI</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-10">
            <Card>
              <CardContent className="">
                <p className="text-sm text-gray-500">Нийт орлого</p>
                <p className="text-2xl font-bold">$0</p>
                <Badge className="mt-2 bg-green-100 text-green-600">+%</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="py-6">
                <p className="text-sm text-gray-500">Нийт зардал</p>
                <p className="text-2xl font-bold">$0</p>
                <Badge className="mt-2 bg-red-100 text-red-600">+%</Badge>
              </CardContent>
            </Card>

            <Card className="border-indigo-200 bg-indigo-50">
              <CardContent className="py-6">
                <p className="text-sm text-gray-500">Цэвэр ашиг</p>
                <p className="text-2xl font-bold text-indigo-600">$0</p>
                <Badge className="mt-2 bg-green-100 text-green-600">+%</Badge>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-10">
            <div>
              <h3 className="font-semibold mb-4">Зардлын ангилал</h3>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Программ хангамж</span>
                    <span>$0 (%)</span>
                  </div>

                  <div className="h-2 bg-gray-200 rounded">
                    <div className="h-2 bg-indigo-500 rounded w-[1%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Бичиг хэргийн хэрэгсэл</span>
                    <span>$0 (%)</span>
                  </div>

                  <div className="h-2 bg-gray-200 rounded">
                    <div className="h-2 bg-gray-400 rounded w-[1%]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-40 h-40 rounded-full border-[12px] border-indigo-100 border-t-gray-300 flex items-center justify-center">
                <span className="text-lg font-bold">$0</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Дэлгэрэнгүй гүйлгээнүүд</h3>

            <table className="w-full text-sm">
              <thead className="text-gray-500">
                <tr className="border-b">
                  <th className="text-left py-3">Огноо</th>
                  <th className="text-left">Тайлбар</th>
                  <th className="text-left">Харилцагч</th>
                  <th className="text-left">Ангилал</th>
                  <th className="text-right">Дүн</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b">
                  <td className="py-3">2026-03-01</td>
                  <td>Платформын Pro захиалга</td>
                  <td>Flow Platform</td>
                  <td>
                    <Badge>Программ</Badge>
                  </td>
                  <td className="text-red-500 text-right">-$0</td>
                </tr>

                <tr className="border-b">
                  <td className="py-3">2026-03-01</td>
                  <td>Үйлчилгээний төлбөр</td>
                  <td>Project X Inc.</td>
                  <td>
                    <Badge className="bg-green-100 text-green-700">
                      Орлого
                    </Badge>
                  </td>
                  <td className="text-green-600 text-right">+0</td>
                </tr>

                <tr>
                  <td className="py-3">2026-03-01</td>
                  <td>Бичиг хэргийн хэрэгсэл</td>
                  <td>Local Mart</td>
                  <td>
                    <Badge variant="secondary">Хангамж</Badge>
                  </td>
                  <td className="text-red-500 text-right">-$0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
