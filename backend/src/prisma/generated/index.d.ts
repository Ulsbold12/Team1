
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model MarketingStrategy
 * 
 */
export type MarketingStrategy = $Result.DefaultSelection<Prisma.$MarketingStrategyPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Finance
 * 
 */
export type Finance = $Result.DefaultSelection<Prisma.$FinancePayload>
/**
 * Model FinanceAnalysis
 * 
 */
export type FinanceAnalysis = $Result.DefaultSelection<Prisma.$FinanceAnalysisPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Administrator
 * 
 */
export type Administrator = $Result.DefaultSelection<Prisma.$AdministratorPayload>
/**
 * Model InviteCode
 * 
 */
export type InviteCode = $Result.DefaultSelection<Prisma.$InviteCodePayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model AiUsage
 * 
 */
export type AiUsage = $Result.DefaultSelection<Prisma.$AiUsagePayload>
/**
 * Model MarketinAIUsage
 * 
 */
export type MarketinAIUsage = $Result.DefaultSelection<Prisma.$MarketinAIUsagePayload>
/**
 * Model Sales
 * 
 */
export type Sales = $Result.DefaultSelection<Prisma.$SalesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Industry: {
  TECH: 'TECH',
  FINANCE: 'FINANCE',
  HEALTHCARE: 'HEALTHCARE',
  EDUCATION: 'EDUCATION',
  RETAIL: 'RETAIL',
  MANUFACTURING: 'MANUFACTURING'
};

export type Industry = (typeof Industry)[keyof typeof Industry]


export const MemberAccessType: {
  EXECUTIVE: 'EXECUTIVE',
  MANAGEMENT: 'MANAGEMENT',
  MEMBER: 'MEMBER'
};

export type MemberAccessType = (typeof MemberAccessType)[keyof typeof MemberAccessType]


export const Subscription: {
  BASIC: 'BASIC',
  PRO: 'PRO'
};

export type Subscription = (typeof Subscription)[keyof typeof Subscription]


export const AuditAction: {
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
  JOIN: 'JOIN'
};

export type AuditAction = (typeof AuditAction)[keyof typeof AuditAction]


export const AuditTarget: {
  ORGANIZATION: 'ORGANIZATION',
  CLIENT: 'CLIENT',
  INVITE_CODE: 'INVITE_CODE',
  PATRONAGE: 'PATRONAGE'
};

export type AuditTarget = (typeof AuditTarget)[keyof typeof AuditTarget]

}

export type Industry = $Enums.Industry

export const Industry: typeof $Enums.Industry

export type MemberAccessType = $Enums.MemberAccessType

export const MemberAccessType: typeof $Enums.MemberAccessType

export type Subscription = $Enums.Subscription

export const Subscription: typeof $Enums.Subscription

export type AuditAction = $Enums.AuditAction

export const AuditAction: typeof $Enums.AuditAction

export type AuditTarget = $Enums.AuditTarget

export const AuditTarget: typeof $Enums.AuditTarget

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Organizations
 * const organizations = await prisma.organization.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.marketingStrategy`: Exposes CRUD operations for the **MarketingStrategy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MarketingStrategies
    * const marketingStrategies = await prisma.marketingStrategy.findMany()
    * ```
    */
  get marketingStrategy(): Prisma.MarketingStrategyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.finance`: Exposes CRUD operations for the **Finance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Finances
    * const finances = await prisma.finance.findMany()
    * ```
    */
  get finance(): Prisma.FinanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.financeAnalysis`: Exposes CRUD operations for the **FinanceAnalysis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FinanceAnalyses
    * const financeAnalyses = await prisma.financeAnalysis.findMany()
    * ```
    */
  get financeAnalysis(): Prisma.FinanceAnalysisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.administrator`: Exposes CRUD operations for the **Administrator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Administrators
    * const administrators = await prisma.administrator.findMany()
    * ```
    */
  get administrator(): Prisma.AdministratorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inviteCode`: Exposes CRUD operations for the **InviteCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InviteCodes
    * const inviteCodes = await prisma.inviteCode.findMany()
    * ```
    */
  get inviteCode(): Prisma.InviteCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aiUsage`: Exposes CRUD operations for the **AiUsage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AiUsages
    * const aiUsages = await prisma.aiUsage.findMany()
    * ```
    */
  get aiUsage(): Prisma.AiUsageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.marketinAIUsage`: Exposes CRUD operations for the **MarketinAIUsage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MarketinAIUsages
    * const marketinAIUsages = await prisma.marketinAIUsage.findMany()
    * ```
    */
  get marketinAIUsage(): Prisma.MarketinAIUsageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sales`: Exposes CRUD operations for the **Sales** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales
    * const sales = await prisma.sales.findMany()
    * ```
    */
  get sales(): Prisma.SalesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Organization: 'Organization',
    MarketingStrategy: 'MarketingStrategy',
    Client: 'Client',
    Finance: 'Finance',
    FinanceAnalysis: 'FinanceAnalysis',
    Post: 'Post',
    Administrator: 'Administrator',
    InviteCode: 'InviteCode',
    AuditLog: 'AuditLog',
    AiUsage: 'AiUsage',
    MarketinAIUsage: 'MarketinAIUsage',
    Sales: 'Sales'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "organization" | "marketingStrategy" | "client" | "finance" | "financeAnalysis" | "post" | "administrator" | "inviteCode" | "auditLog" | "aiUsage" | "marketinAIUsage" | "sales"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      MarketingStrategy: {
        payload: Prisma.$MarketingStrategyPayload<ExtArgs>
        fields: Prisma.MarketingStrategyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarketingStrategyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingStrategyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarketingStrategyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingStrategyPayload>
          }
          findFirst: {
            args: Prisma.MarketingStrategyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingStrategyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarketingStrategyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingStrategyPayload>
          }
          findMany: {
            args: Prisma.MarketingStrategyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingStrategyPayload>[]
          }
          create: {
            args: Prisma.MarketingStrategyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingStrategyPayload>
          }
          createMany: {
            args: Prisma.MarketingStrategyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarketingStrategyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingStrategyPayload>[]
          }
          delete: {
            args: Prisma.MarketingStrategyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingStrategyPayload>
          }
          update: {
            args: Prisma.MarketingStrategyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingStrategyPayload>
          }
          deleteMany: {
            args: Prisma.MarketingStrategyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarketingStrategyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarketingStrategyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingStrategyPayload>[]
          }
          upsert: {
            args: Prisma.MarketingStrategyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingStrategyPayload>
          }
          aggregate: {
            args: Prisma.MarketingStrategyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarketingStrategy>
          }
          groupBy: {
            args: Prisma.MarketingStrategyGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarketingStrategyGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarketingStrategyCountArgs<ExtArgs>
            result: $Utils.Optional<MarketingStrategyCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Finance: {
        payload: Prisma.$FinancePayload<ExtArgs>
        fields: Prisma.FinanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>
          }
          findFirst: {
            args: Prisma.FinanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>
          }
          findMany: {
            args: Prisma.FinanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>[]
          }
          create: {
            args: Prisma.FinanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>
          }
          createMany: {
            args: Prisma.FinanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FinanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>[]
          }
          delete: {
            args: Prisma.FinanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>
          }
          update: {
            args: Prisma.FinanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>
          }
          deleteMany: {
            args: Prisma.FinanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FinanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FinanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>[]
          }
          upsert: {
            args: Prisma.FinanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>
          }
          aggregate: {
            args: Prisma.FinanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinance>
          }
          groupBy: {
            args: Prisma.FinanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<FinanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.FinanceCountArgs<ExtArgs>
            result: $Utils.Optional<FinanceCountAggregateOutputType> | number
          }
        }
      }
      FinanceAnalysis: {
        payload: Prisma.$FinanceAnalysisPayload<ExtArgs>
        fields: Prisma.FinanceAnalysisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinanceAnalysisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceAnalysisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinanceAnalysisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceAnalysisPayload>
          }
          findFirst: {
            args: Prisma.FinanceAnalysisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceAnalysisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinanceAnalysisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceAnalysisPayload>
          }
          findMany: {
            args: Prisma.FinanceAnalysisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceAnalysisPayload>[]
          }
          create: {
            args: Prisma.FinanceAnalysisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceAnalysisPayload>
          }
          createMany: {
            args: Prisma.FinanceAnalysisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FinanceAnalysisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceAnalysisPayload>[]
          }
          delete: {
            args: Prisma.FinanceAnalysisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceAnalysisPayload>
          }
          update: {
            args: Prisma.FinanceAnalysisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceAnalysisPayload>
          }
          deleteMany: {
            args: Prisma.FinanceAnalysisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FinanceAnalysisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FinanceAnalysisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceAnalysisPayload>[]
          }
          upsert: {
            args: Prisma.FinanceAnalysisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceAnalysisPayload>
          }
          aggregate: {
            args: Prisma.FinanceAnalysisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinanceAnalysis>
          }
          groupBy: {
            args: Prisma.FinanceAnalysisGroupByArgs<ExtArgs>
            result: $Utils.Optional<FinanceAnalysisGroupByOutputType>[]
          }
          count: {
            args: Prisma.FinanceAnalysisCountArgs<ExtArgs>
            result: $Utils.Optional<FinanceAnalysisCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Administrator: {
        payload: Prisma.$AdministratorPayload<ExtArgs>
        fields: Prisma.AdministratorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdministratorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministratorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdministratorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministratorPayload>
          }
          findFirst: {
            args: Prisma.AdministratorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministratorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdministratorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministratorPayload>
          }
          findMany: {
            args: Prisma.AdministratorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministratorPayload>[]
          }
          create: {
            args: Prisma.AdministratorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministratorPayload>
          }
          createMany: {
            args: Prisma.AdministratorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdministratorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministratorPayload>[]
          }
          delete: {
            args: Prisma.AdministratorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministratorPayload>
          }
          update: {
            args: Prisma.AdministratorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministratorPayload>
          }
          deleteMany: {
            args: Prisma.AdministratorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdministratorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdministratorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministratorPayload>[]
          }
          upsert: {
            args: Prisma.AdministratorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministratorPayload>
          }
          aggregate: {
            args: Prisma.AdministratorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdministrator>
          }
          groupBy: {
            args: Prisma.AdministratorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdministratorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdministratorCountArgs<ExtArgs>
            result: $Utils.Optional<AdministratorCountAggregateOutputType> | number
          }
        }
      }
      InviteCode: {
        payload: Prisma.$InviteCodePayload<ExtArgs>
        fields: Prisma.InviteCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InviteCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InviteCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>
          }
          findFirst: {
            args: Prisma.InviteCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InviteCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>
          }
          findMany: {
            args: Prisma.InviteCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>[]
          }
          create: {
            args: Prisma.InviteCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>
          }
          createMany: {
            args: Prisma.InviteCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InviteCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>[]
          }
          delete: {
            args: Prisma.InviteCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>
          }
          update: {
            args: Prisma.InviteCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>
          }
          deleteMany: {
            args: Prisma.InviteCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InviteCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InviteCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>[]
          }
          upsert: {
            args: Prisma.InviteCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>
          }
          aggregate: {
            args: Prisma.InviteCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInviteCode>
          }
          groupBy: {
            args: Prisma.InviteCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<InviteCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.InviteCodeCountArgs<ExtArgs>
            result: $Utils.Optional<InviteCodeCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      AiUsage: {
        payload: Prisma.$AiUsagePayload<ExtArgs>
        fields: Prisma.AiUsageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AiUsageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AiUsageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsagePayload>
          }
          findFirst: {
            args: Prisma.AiUsageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AiUsageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsagePayload>
          }
          findMany: {
            args: Prisma.AiUsageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsagePayload>[]
          }
          create: {
            args: Prisma.AiUsageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsagePayload>
          }
          createMany: {
            args: Prisma.AiUsageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AiUsageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsagePayload>[]
          }
          delete: {
            args: Prisma.AiUsageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsagePayload>
          }
          update: {
            args: Prisma.AiUsageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsagePayload>
          }
          deleteMany: {
            args: Prisma.AiUsageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AiUsageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AiUsageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsagePayload>[]
          }
          upsert: {
            args: Prisma.AiUsageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsagePayload>
          }
          aggregate: {
            args: Prisma.AiUsageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAiUsage>
          }
          groupBy: {
            args: Prisma.AiUsageGroupByArgs<ExtArgs>
            result: $Utils.Optional<AiUsageGroupByOutputType>[]
          }
          count: {
            args: Prisma.AiUsageCountArgs<ExtArgs>
            result: $Utils.Optional<AiUsageCountAggregateOutputType> | number
          }
        }
      }
      MarketinAIUsage: {
        payload: Prisma.$MarketinAIUsagePayload<ExtArgs>
        fields: Prisma.MarketinAIUsageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarketinAIUsageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketinAIUsagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarketinAIUsageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketinAIUsagePayload>
          }
          findFirst: {
            args: Prisma.MarketinAIUsageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketinAIUsagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarketinAIUsageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketinAIUsagePayload>
          }
          findMany: {
            args: Prisma.MarketinAIUsageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketinAIUsagePayload>[]
          }
          create: {
            args: Prisma.MarketinAIUsageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketinAIUsagePayload>
          }
          createMany: {
            args: Prisma.MarketinAIUsageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarketinAIUsageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketinAIUsagePayload>[]
          }
          delete: {
            args: Prisma.MarketinAIUsageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketinAIUsagePayload>
          }
          update: {
            args: Prisma.MarketinAIUsageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketinAIUsagePayload>
          }
          deleteMany: {
            args: Prisma.MarketinAIUsageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarketinAIUsageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarketinAIUsageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketinAIUsagePayload>[]
          }
          upsert: {
            args: Prisma.MarketinAIUsageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketinAIUsagePayload>
          }
          aggregate: {
            args: Prisma.MarketinAIUsageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarketinAIUsage>
          }
          groupBy: {
            args: Prisma.MarketinAIUsageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarketinAIUsageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarketinAIUsageCountArgs<ExtArgs>
            result: $Utils.Optional<MarketinAIUsageCountAggregateOutputType> | number
          }
        }
      }
      Sales: {
        payload: Prisma.$SalesPayload<ExtArgs>
        fields: Prisma.SalesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          findFirst: {
            args: Prisma.SalesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          findMany: {
            args: Prisma.SalesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>[]
          }
          create: {
            args: Prisma.SalesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          createMany: {
            args: Prisma.SalesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>[]
          }
          delete: {
            args: Prisma.SalesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          update: {
            args: Prisma.SalesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          deleteMany: {
            args: Prisma.SalesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>[]
          }
          upsert: {
            args: Prisma.SalesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          aggregate: {
            args: Prisma.SalesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSales>
          }
          groupBy: {
            args: Prisma.SalesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalesGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalesCountArgs<ExtArgs>
            result: $Utils.Optional<SalesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    organization?: OrganizationOmit
    marketingStrategy?: MarketingStrategyOmit
    client?: ClientOmit
    finance?: FinanceOmit
    financeAnalysis?: FinanceAnalysisOmit
    post?: PostOmit
    administrator?: AdministratorOmit
    inviteCode?: InviteCodeOmit
    auditLog?: AuditLogOmit
    aiUsage?: AiUsageOmit
    marketinAIUsage?: MarketinAIUsageOmit
    sales?: SalesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    members: number
    financeData: number
    financeAnalyses: number
    InviteCode: number
    marketinAIUsages: number
    posts: number
    sales: number
    aiUsages: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | OrganizationCountOutputTypeCountMembersArgs
    financeData?: boolean | OrganizationCountOutputTypeCountFinanceDataArgs
    financeAnalyses?: boolean | OrganizationCountOutputTypeCountFinanceAnalysesArgs
    InviteCode?: boolean | OrganizationCountOutputTypeCountInviteCodeArgs
    marketinAIUsages?: boolean | OrganizationCountOutputTypeCountMarketinAIUsagesArgs
    posts?: boolean | OrganizationCountOutputTypeCountPostsArgs
    sales?: boolean | OrganizationCountOutputTypeCountSalesArgs
    aiUsages?: boolean | OrganizationCountOutputTypeCountAiUsagesArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountFinanceDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinanceWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountFinanceAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinanceAnalysisWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountInviteCodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InviteCodeWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountMarketinAIUsagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketinAIUsageWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountAiUsagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiUsageWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    aiUsages: number
    auditLogs: number
    marketinAIUsages: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aiUsages?: boolean | ClientCountOutputTypeCountAiUsagesArgs
    auditLogs?: boolean | ClientCountOutputTypeCountAuditLogsArgs
    marketinAIUsages?: boolean | ClientCountOutputTypeCountMarketinAIUsagesArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountAiUsagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiUsageWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountMarketinAIUsagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketinAIUsageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    name: string | null
    industry: $Enums.Industry | null
    patronage: $Enums.Subscription | null
    createdAt: Date | null
    address: string | null
    description: string | null
    emailAddress: string | null
    phoneNumber: string | null
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
    facebookPageId: string | null
    facebookAccessToken: string | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    industry: $Enums.Industry | null
    patronage: $Enums.Subscription | null
    createdAt: Date | null
    address: string | null
    description: string | null
    emailAddress: string | null
    phoneNumber: string | null
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
    facebookPageId: string | null
    facebookAccessToken: string | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    industry: number
    patronage: number
    createdAt: number
    address: number
    description: number
    emailAddress: number
    phoneNumber: number
    stripeCustomerId: number
    stripeSubscriptionId: number
    facebookPageId: number
    facebookAccessToken: number
    _all: number
  }


  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    industry?: true
    patronage?: true
    createdAt?: true
    address?: true
    description?: true
    emailAddress?: true
    phoneNumber?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    facebookPageId?: true
    facebookAccessToken?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    industry?: true
    patronage?: true
    createdAt?: true
    address?: true
    description?: true
    emailAddress?: true
    phoneNumber?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    facebookPageId?: true
    facebookAccessToken?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    industry?: true
    patronage?: true
    createdAt?: true
    address?: true
    description?: true
    emailAddress?: true
    phoneNumber?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    facebookPageId?: true
    facebookAccessToken?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: string
    name: string
    industry: $Enums.Industry
    patronage: $Enums.Subscription
    createdAt: Date
    address: string
    description: string
    emailAddress: string
    phoneNumber: string
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
    facebookPageId: string | null
    facebookAccessToken: string | null
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    industry?: boolean
    patronage?: boolean
    createdAt?: boolean
    address?: boolean
    description?: boolean
    emailAddress?: boolean
    phoneNumber?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    facebookPageId?: boolean
    facebookAccessToken?: boolean
    members?: boolean | Organization$membersArgs<ExtArgs>
    financeData?: boolean | Organization$financeDataArgs<ExtArgs>
    financeAnalyses?: boolean | Organization$financeAnalysesArgs<ExtArgs>
    InviteCode?: boolean | Organization$InviteCodeArgs<ExtArgs>
    marketinAIUsages?: boolean | Organization$marketinAIUsagesArgs<ExtArgs>
    marketingStrategy?: boolean | Organization$marketingStrategyArgs<ExtArgs>
    posts?: boolean | Organization$postsArgs<ExtArgs>
    sales?: boolean | Organization$salesArgs<ExtArgs>
    aiUsages?: boolean | Organization$aiUsagesArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    industry?: boolean
    patronage?: boolean
    createdAt?: boolean
    address?: boolean
    description?: boolean
    emailAddress?: boolean
    phoneNumber?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    facebookPageId?: boolean
    facebookAccessToken?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    industry?: boolean
    patronage?: boolean
    createdAt?: boolean
    address?: boolean
    description?: boolean
    emailAddress?: boolean
    phoneNumber?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    facebookPageId?: boolean
    facebookAccessToken?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    name?: boolean
    industry?: boolean
    patronage?: boolean
    createdAt?: boolean
    address?: boolean
    description?: boolean
    emailAddress?: boolean
    phoneNumber?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    facebookPageId?: boolean
    facebookAccessToken?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "industry" | "patronage" | "createdAt" | "address" | "description" | "emailAddress" | "phoneNumber" | "stripeCustomerId" | "stripeSubscriptionId" | "facebookPageId" | "facebookAccessToken", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Organization$membersArgs<ExtArgs>
    financeData?: boolean | Organization$financeDataArgs<ExtArgs>
    financeAnalyses?: boolean | Organization$financeAnalysesArgs<ExtArgs>
    InviteCode?: boolean | Organization$InviteCodeArgs<ExtArgs>
    marketinAIUsages?: boolean | Organization$marketinAIUsagesArgs<ExtArgs>
    marketingStrategy?: boolean | Organization$marketingStrategyArgs<ExtArgs>
    posts?: boolean | Organization$postsArgs<ExtArgs>
    sales?: boolean | Organization$salesArgs<ExtArgs>
    aiUsages?: boolean | Organization$aiUsagesArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      members: Prisma.$ClientPayload<ExtArgs>[]
      financeData: Prisma.$FinancePayload<ExtArgs>[]
      financeAnalyses: Prisma.$FinanceAnalysisPayload<ExtArgs>[]
      InviteCode: Prisma.$InviteCodePayload<ExtArgs>[]
      marketinAIUsages: Prisma.$MarketinAIUsagePayload<ExtArgs>[]
      marketingStrategy: Prisma.$MarketingStrategyPayload<ExtArgs> | null
      posts: Prisma.$PostPayload<ExtArgs>[]
      sales: Prisma.$SalesPayload<ExtArgs>[]
      aiUsages: Prisma.$AiUsagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      industry: $Enums.Industry
      patronage: $Enums.Subscription
      createdAt: Date
      address: string
      description: string
      emailAddress: string
      phoneNumber: string
      stripeCustomerId: string | null
      stripeSubscriptionId: string | null
      facebookPageId: string | null
      facebookAccessToken: string | null
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Organization$membersArgs<ExtArgs> = {}>(args?: Subset<T, Organization$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    financeData<T extends Organization$financeDataArgs<ExtArgs> = {}>(args?: Subset<T, Organization$financeDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    financeAnalyses<T extends Organization$financeAnalysesArgs<ExtArgs> = {}>(args?: Subset<T, Organization$financeAnalysesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinanceAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    InviteCode<T extends Organization$InviteCodeArgs<ExtArgs> = {}>(args?: Subset<T, Organization$InviteCodeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    marketinAIUsages<T extends Organization$marketinAIUsagesArgs<ExtArgs> = {}>(args?: Subset<T, Organization$marketinAIUsagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketinAIUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    marketingStrategy<T extends Organization$marketingStrategyArgs<ExtArgs> = {}>(args?: Subset<T, Organization$marketingStrategyArgs<ExtArgs>>): Prisma__MarketingStrategyClient<$Result.GetResult<Prisma.$MarketingStrategyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    posts<T extends Organization$postsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sales<T extends Organization$salesArgs<ExtArgs> = {}>(args?: Subset<T, Organization$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    aiUsages<T extends Organization$aiUsagesArgs<ExtArgs> = {}>(args?: Subset<T, Organization$aiUsagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'String'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly industry: FieldRef<"Organization", 'Industry'>
    readonly patronage: FieldRef<"Organization", 'Subscription'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
    readonly address: FieldRef<"Organization", 'String'>
    readonly description: FieldRef<"Organization", 'String'>
    readonly emailAddress: FieldRef<"Organization", 'String'>
    readonly phoneNumber: FieldRef<"Organization", 'String'>
    readonly stripeCustomerId: FieldRef<"Organization", 'String'>
    readonly stripeSubscriptionId: FieldRef<"Organization", 'String'>
    readonly facebookPageId: FieldRef<"Organization", 'String'>
    readonly facebookAccessToken: FieldRef<"Organization", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization updateManyAndReturn
   */
  export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.members
   */
  export type Organization$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    cursor?: ClientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Organization.financeData
   */
  export type Organization$financeDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
    where?: FinanceWhereInput
    orderBy?: FinanceOrderByWithRelationInput | FinanceOrderByWithRelationInput[]
    cursor?: FinanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinanceScalarFieldEnum | FinanceScalarFieldEnum[]
  }

  /**
   * Organization.financeAnalyses
   */
  export type Organization$financeAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceAnalysis
     */
    select?: FinanceAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceAnalysis
     */
    omit?: FinanceAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceAnalysisInclude<ExtArgs> | null
    where?: FinanceAnalysisWhereInput
    orderBy?: FinanceAnalysisOrderByWithRelationInput | FinanceAnalysisOrderByWithRelationInput[]
    cursor?: FinanceAnalysisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinanceAnalysisScalarFieldEnum | FinanceAnalysisScalarFieldEnum[]
  }

  /**
   * Organization.InviteCode
   */
  export type Organization$InviteCodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteCode
     */
    omit?: InviteCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteCodeInclude<ExtArgs> | null
    where?: InviteCodeWhereInput
    orderBy?: InviteCodeOrderByWithRelationInput | InviteCodeOrderByWithRelationInput[]
    cursor?: InviteCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InviteCodeScalarFieldEnum | InviteCodeScalarFieldEnum[]
  }

  /**
   * Organization.marketinAIUsages
   */
  export type Organization$marketinAIUsagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketinAIUsage
     */
    select?: MarketinAIUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketinAIUsage
     */
    omit?: MarketinAIUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketinAIUsageInclude<ExtArgs> | null
    where?: MarketinAIUsageWhereInput
    orderBy?: MarketinAIUsageOrderByWithRelationInput | MarketinAIUsageOrderByWithRelationInput[]
    cursor?: MarketinAIUsageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarketinAIUsageScalarFieldEnum | MarketinAIUsageScalarFieldEnum[]
  }

  /**
   * Organization.marketingStrategy
   */
  export type Organization$marketingStrategyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingStrategy
     */
    select?: MarketingStrategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingStrategy
     */
    omit?: MarketingStrategyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketingStrategyInclude<ExtArgs> | null
    where?: MarketingStrategyWhereInput
  }

  /**
   * Organization.posts
   */
  export type Organization$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Organization.sales
   */
  export type Organization$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    where?: SalesWhereInput
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    cursor?: SalesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * Organization.aiUsages
   */
  export type Organization$aiUsagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsage
     */
    select?: AiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiUsage
     */
    omit?: AiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiUsageInclude<ExtArgs> | null
    where?: AiUsageWhereInput
    orderBy?: AiUsageOrderByWithRelationInput | AiUsageOrderByWithRelationInput[]
    cursor?: AiUsageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AiUsageScalarFieldEnum | AiUsageScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model MarketingStrategy
   */

  export type AggregateMarketingStrategy = {
    _count: MarketingStrategyCountAggregateOutputType | null
    _min: MarketingStrategyMinAggregateOutputType | null
    _max: MarketingStrategyMaxAggregateOutputType | null
  }

  export type MarketingStrategyMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    productName: string | null
    description: string | null
    targetAudience: string | null
    advice: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type MarketingStrategyMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    productName: string | null
    description: string | null
    targetAudience: string | null
    advice: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type MarketingStrategyCountAggregateOutputType = {
    id: number
    orgId: number
    productName: number
    description: number
    targetAudience: number
    advice: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type MarketingStrategyMinAggregateInputType = {
    id?: true
    orgId?: true
    productName?: true
    description?: true
    targetAudience?: true
    advice?: true
    updatedAt?: true
    createdAt?: true
  }

  export type MarketingStrategyMaxAggregateInputType = {
    id?: true
    orgId?: true
    productName?: true
    description?: true
    targetAudience?: true
    advice?: true
    updatedAt?: true
    createdAt?: true
  }

  export type MarketingStrategyCountAggregateInputType = {
    id?: true
    orgId?: true
    productName?: true
    description?: true
    targetAudience?: true
    advice?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type MarketingStrategyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketingStrategy to aggregate.
     */
    where?: MarketingStrategyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketingStrategies to fetch.
     */
    orderBy?: MarketingStrategyOrderByWithRelationInput | MarketingStrategyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarketingStrategyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketingStrategies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketingStrategies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MarketingStrategies
    **/
    _count?: true | MarketingStrategyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarketingStrategyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarketingStrategyMaxAggregateInputType
  }

  export type GetMarketingStrategyAggregateType<T extends MarketingStrategyAggregateArgs> = {
        [P in keyof T & keyof AggregateMarketingStrategy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarketingStrategy[P]>
      : GetScalarType<T[P], AggregateMarketingStrategy[P]>
  }




  export type MarketingStrategyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketingStrategyWhereInput
    orderBy?: MarketingStrategyOrderByWithAggregationInput | MarketingStrategyOrderByWithAggregationInput[]
    by: MarketingStrategyScalarFieldEnum[] | MarketingStrategyScalarFieldEnum
    having?: MarketingStrategyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarketingStrategyCountAggregateInputType | true
    _min?: MarketingStrategyMinAggregateInputType
    _max?: MarketingStrategyMaxAggregateInputType
  }

  export type MarketingStrategyGroupByOutputType = {
    id: string
    orgId: string
    productName: string
    description: string
    targetAudience: string
    advice: string | null
    updatedAt: Date
    createdAt: Date
    _count: MarketingStrategyCountAggregateOutputType | null
    _min: MarketingStrategyMinAggregateOutputType | null
    _max: MarketingStrategyMaxAggregateOutputType | null
  }

  type GetMarketingStrategyGroupByPayload<T extends MarketingStrategyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarketingStrategyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarketingStrategyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarketingStrategyGroupByOutputType[P]>
            : GetScalarType<T[P], MarketingStrategyGroupByOutputType[P]>
        }
      >
    >


  export type MarketingStrategySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    productName?: boolean
    description?: boolean
    targetAudience?: boolean
    advice?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marketingStrategy"]>

  export type MarketingStrategySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    productName?: boolean
    description?: boolean
    targetAudience?: boolean
    advice?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marketingStrategy"]>

  export type MarketingStrategySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    productName?: boolean
    description?: boolean
    targetAudience?: boolean
    advice?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marketingStrategy"]>

  export type MarketingStrategySelectScalar = {
    id?: boolean
    orgId?: boolean
    productName?: boolean
    description?: boolean
    targetAudience?: boolean
    advice?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type MarketingStrategyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "productName" | "description" | "targetAudience" | "advice" | "updatedAt" | "createdAt", ExtArgs["result"]["marketingStrategy"]>
  export type MarketingStrategyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type MarketingStrategyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type MarketingStrategyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $MarketingStrategyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MarketingStrategy"
    objects: {
      org: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      productName: string
      description: string
      targetAudience: string
      advice: string | null
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["marketingStrategy"]>
    composites: {}
  }

  type MarketingStrategyGetPayload<S extends boolean | null | undefined | MarketingStrategyDefaultArgs> = $Result.GetResult<Prisma.$MarketingStrategyPayload, S>

  type MarketingStrategyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarketingStrategyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarketingStrategyCountAggregateInputType | true
    }

  export interface MarketingStrategyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MarketingStrategy'], meta: { name: 'MarketingStrategy' } }
    /**
     * Find zero or one MarketingStrategy that matches the filter.
     * @param {MarketingStrategyFindUniqueArgs} args - Arguments to find a MarketingStrategy
     * @example
     * // Get one MarketingStrategy
     * const marketingStrategy = await prisma.marketingStrategy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarketingStrategyFindUniqueArgs>(args: SelectSubset<T, MarketingStrategyFindUniqueArgs<ExtArgs>>): Prisma__MarketingStrategyClient<$Result.GetResult<Prisma.$MarketingStrategyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MarketingStrategy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarketingStrategyFindUniqueOrThrowArgs} args - Arguments to find a MarketingStrategy
     * @example
     * // Get one MarketingStrategy
     * const marketingStrategy = await prisma.marketingStrategy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarketingStrategyFindUniqueOrThrowArgs>(args: SelectSubset<T, MarketingStrategyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarketingStrategyClient<$Result.GetResult<Prisma.$MarketingStrategyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarketingStrategy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingStrategyFindFirstArgs} args - Arguments to find a MarketingStrategy
     * @example
     * // Get one MarketingStrategy
     * const marketingStrategy = await prisma.marketingStrategy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarketingStrategyFindFirstArgs>(args?: SelectSubset<T, MarketingStrategyFindFirstArgs<ExtArgs>>): Prisma__MarketingStrategyClient<$Result.GetResult<Prisma.$MarketingStrategyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarketingStrategy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingStrategyFindFirstOrThrowArgs} args - Arguments to find a MarketingStrategy
     * @example
     * // Get one MarketingStrategy
     * const marketingStrategy = await prisma.marketingStrategy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarketingStrategyFindFirstOrThrowArgs>(args?: SelectSubset<T, MarketingStrategyFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarketingStrategyClient<$Result.GetResult<Prisma.$MarketingStrategyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MarketingStrategies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingStrategyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MarketingStrategies
     * const marketingStrategies = await prisma.marketingStrategy.findMany()
     * 
     * // Get first 10 MarketingStrategies
     * const marketingStrategies = await prisma.marketingStrategy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marketingStrategyWithIdOnly = await prisma.marketingStrategy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarketingStrategyFindManyArgs>(args?: SelectSubset<T, MarketingStrategyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketingStrategyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MarketingStrategy.
     * @param {MarketingStrategyCreateArgs} args - Arguments to create a MarketingStrategy.
     * @example
     * // Create one MarketingStrategy
     * const MarketingStrategy = await prisma.marketingStrategy.create({
     *   data: {
     *     // ... data to create a MarketingStrategy
     *   }
     * })
     * 
     */
    create<T extends MarketingStrategyCreateArgs>(args: SelectSubset<T, MarketingStrategyCreateArgs<ExtArgs>>): Prisma__MarketingStrategyClient<$Result.GetResult<Prisma.$MarketingStrategyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MarketingStrategies.
     * @param {MarketingStrategyCreateManyArgs} args - Arguments to create many MarketingStrategies.
     * @example
     * // Create many MarketingStrategies
     * const marketingStrategy = await prisma.marketingStrategy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarketingStrategyCreateManyArgs>(args?: SelectSubset<T, MarketingStrategyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MarketingStrategies and returns the data saved in the database.
     * @param {MarketingStrategyCreateManyAndReturnArgs} args - Arguments to create many MarketingStrategies.
     * @example
     * // Create many MarketingStrategies
     * const marketingStrategy = await prisma.marketingStrategy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MarketingStrategies and only return the `id`
     * const marketingStrategyWithIdOnly = await prisma.marketingStrategy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarketingStrategyCreateManyAndReturnArgs>(args?: SelectSubset<T, MarketingStrategyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketingStrategyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MarketingStrategy.
     * @param {MarketingStrategyDeleteArgs} args - Arguments to delete one MarketingStrategy.
     * @example
     * // Delete one MarketingStrategy
     * const MarketingStrategy = await prisma.marketingStrategy.delete({
     *   where: {
     *     // ... filter to delete one MarketingStrategy
     *   }
     * })
     * 
     */
    delete<T extends MarketingStrategyDeleteArgs>(args: SelectSubset<T, MarketingStrategyDeleteArgs<ExtArgs>>): Prisma__MarketingStrategyClient<$Result.GetResult<Prisma.$MarketingStrategyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MarketingStrategy.
     * @param {MarketingStrategyUpdateArgs} args - Arguments to update one MarketingStrategy.
     * @example
     * // Update one MarketingStrategy
     * const marketingStrategy = await prisma.marketingStrategy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarketingStrategyUpdateArgs>(args: SelectSubset<T, MarketingStrategyUpdateArgs<ExtArgs>>): Prisma__MarketingStrategyClient<$Result.GetResult<Prisma.$MarketingStrategyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MarketingStrategies.
     * @param {MarketingStrategyDeleteManyArgs} args - Arguments to filter MarketingStrategies to delete.
     * @example
     * // Delete a few MarketingStrategies
     * const { count } = await prisma.marketingStrategy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarketingStrategyDeleteManyArgs>(args?: SelectSubset<T, MarketingStrategyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketingStrategies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingStrategyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MarketingStrategies
     * const marketingStrategy = await prisma.marketingStrategy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarketingStrategyUpdateManyArgs>(args: SelectSubset<T, MarketingStrategyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketingStrategies and returns the data updated in the database.
     * @param {MarketingStrategyUpdateManyAndReturnArgs} args - Arguments to update many MarketingStrategies.
     * @example
     * // Update many MarketingStrategies
     * const marketingStrategy = await prisma.marketingStrategy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MarketingStrategies and only return the `id`
     * const marketingStrategyWithIdOnly = await prisma.marketingStrategy.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MarketingStrategyUpdateManyAndReturnArgs>(args: SelectSubset<T, MarketingStrategyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketingStrategyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MarketingStrategy.
     * @param {MarketingStrategyUpsertArgs} args - Arguments to update or create a MarketingStrategy.
     * @example
     * // Update or create a MarketingStrategy
     * const marketingStrategy = await prisma.marketingStrategy.upsert({
     *   create: {
     *     // ... data to create a MarketingStrategy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MarketingStrategy we want to update
     *   }
     * })
     */
    upsert<T extends MarketingStrategyUpsertArgs>(args: SelectSubset<T, MarketingStrategyUpsertArgs<ExtArgs>>): Prisma__MarketingStrategyClient<$Result.GetResult<Prisma.$MarketingStrategyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MarketingStrategies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingStrategyCountArgs} args - Arguments to filter MarketingStrategies to count.
     * @example
     * // Count the number of MarketingStrategies
     * const count = await prisma.marketingStrategy.count({
     *   where: {
     *     // ... the filter for the MarketingStrategies we want to count
     *   }
     * })
    **/
    count<T extends MarketingStrategyCountArgs>(
      args?: Subset<T, MarketingStrategyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarketingStrategyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MarketingStrategy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingStrategyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MarketingStrategyAggregateArgs>(args: Subset<T, MarketingStrategyAggregateArgs>): Prisma.PrismaPromise<GetMarketingStrategyAggregateType<T>>

    /**
     * Group by MarketingStrategy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingStrategyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MarketingStrategyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarketingStrategyGroupByArgs['orderBy'] }
        : { orderBy?: MarketingStrategyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MarketingStrategyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketingStrategyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MarketingStrategy model
   */
  readonly fields: MarketingStrategyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MarketingStrategy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarketingStrategyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    org<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MarketingStrategy model
   */
  interface MarketingStrategyFieldRefs {
    readonly id: FieldRef<"MarketingStrategy", 'String'>
    readonly orgId: FieldRef<"MarketingStrategy", 'String'>
    readonly productName: FieldRef<"MarketingStrategy", 'String'>
    readonly description: FieldRef<"MarketingStrategy", 'String'>
    readonly targetAudience: FieldRef<"MarketingStrategy", 'String'>
    readonly advice: FieldRef<"MarketingStrategy", 'String'>
    readonly updatedAt: FieldRef<"MarketingStrategy", 'DateTime'>
    readonly createdAt: FieldRef<"MarketingStrategy", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MarketingStrategy findUnique
   */
  export type MarketingStrategyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingStrategy
     */
    select?: MarketingStrategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingStrategy
     */
    omit?: MarketingStrategyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketingStrategyInclude<ExtArgs> | null
    /**
     * Filter, which MarketingStrategy to fetch.
     */
    where: MarketingStrategyWhereUniqueInput
  }

  /**
   * MarketingStrategy findUniqueOrThrow
   */
  export type MarketingStrategyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingStrategy
     */
    select?: MarketingStrategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingStrategy
     */
    omit?: MarketingStrategyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketingStrategyInclude<ExtArgs> | null
    /**
     * Filter, which MarketingStrategy to fetch.
     */
    where: MarketingStrategyWhereUniqueInput
  }

  /**
   * MarketingStrategy findFirst
   */
  export type MarketingStrategyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingStrategy
     */
    select?: MarketingStrategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingStrategy
     */
    omit?: MarketingStrategyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketingStrategyInclude<ExtArgs> | null
    /**
     * Filter, which MarketingStrategy to fetch.
     */
    where?: MarketingStrategyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketingStrategies to fetch.
     */
    orderBy?: MarketingStrategyOrderByWithRelationInput | MarketingStrategyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketingStrategies.
     */
    cursor?: MarketingStrategyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketingStrategies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketingStrategies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketingStrategies.
     */
    distinct?: MarketingStrategyScalarFieldEnum | MarketingStrategyScalarFieldEnum[]
  }

  /**
   * MarketingStrategy findFirstOrThrow
   */
  export type MarketingStrategyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingStrategy
     */
    select?: MarketingStrategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingStrategy
     */
    omit?: MarketingStrategyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketingStrategyInclude<ExtArgs> | null
    /**
     * Filter, which MarketingStrategy to fetch.
     */
    where?: MarketingStrategyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketingStrategies to fetch.
     */
    orderBy?: MarketingStrategyOrderByWithRelationInput | MarketingStrategyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketingStrategies.
     */
    cursor?: MarketingStrategyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketingStrategies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketingStrategies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketingStrategies.
     */
    distinct?: MarketingStrategyScalarFieldEnum | MarketingStrategyScalarFieldEnum[]
  }

  /**
   * MarketingStrategy findMany
   */
  export type MarketingStrategyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingStrategy
     */
    select?: MarketingStrategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingStrategy
     */
    omit?: MarketingStrategyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketingStrategyInclude<ExtArgs> | null
    /**
     * Filter, which MarketingStrategies to fetch.
     */
    where?: MarketingStrategyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketingStrategies to fetch.
     */
    orderBy?: MarketingStrategyOrderByWithRelationInput | MarketingStrategyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MarketingStrategies.
     */
    cursor?: MarketingStrategyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketingStrategies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketingStrategies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketingStrategies.
     */
    distinct?: MarketingStrategyScalarFieldEnum | MarketingStrategyScalarFieldEnum[]
  }

  /**
   * MarketingStrategy create
   */
  export type MarketingStrategyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingStrategy
     */
    select?: MarketingStrategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingStrategy
     */
    omit?: MarketingStrategyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketingStrategyInclude<ExtArgs> | null
    /**
     * The data needed to create a MarketingStrategy.
     */
    data: XOR<MarketingStrategyCreateInput, MarketingStrategyUncheckedCreateInput>
  }

  /**
   * MarketingStrategy createMany
   */
  export type MarketingStrategyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MarketingStrategies.
     */
    data: MarketingStrategyCreateManyInput | MarketingStrategyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarketingStrategy createManyAndReturn
   */
  export type MarketingStrategyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingStrategy
     */
    select?: MarketingStrategySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingStrategy
     */
    omit?: MarketingStrategyOmit<ExtArgs> | null
    /**
     * The data used to create many MarketingStrategies.
     */
    data: MarketingStrategyCreateManyInput | MarketingStrategyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketingStrategyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MarketingStrategy update
   */
  export type MarketingStrategyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingStrategy
     */
    select?: MarketingStrategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingStrategy
     */
    omit?: MarketingStrategyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketingStrategyInclude<ExtArgs> | null
    /**
     * The data needed to update a MarketingStrategy.
     */
    data: XOR<MarketingStrategyUpdateInput, MarketingStrategyUncheckedUpdateInput>
    /**
     * Choose, which MarketingStrategy to update.
     */
    where: MarketingStrategyWhereUniqueInput
  }

  /**
   * MarketingStrategy updateMany
   */
  export type MarketingStrategyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MarketingStrategies.
     */
    data: XOR<MarketingStrategyUpdateManyMutationInput, MarketingStrategyUncheckedUpdateManyInput>
    /**
     * Filter which MarketingStrategies to update
     */
    where?: MarketingStrategyWhereInput
    /**
     * Limit how many MarketingStrategies to update.
     */
    limit?: number
  }

  /**
   * MarketingStrategy updateManyAndReturn
   */
  export type MarketingStrategyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingStrategy
     */
    select?: MarketingStrategySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingStrategy
     */
    omit?: MarketingStrategyOmit<ExtArgs> | null
    /**
     * The data used to update MarketingStrategies.
     */
    data: XOR<MarketingStrategyUpdateManyMutationInput, MarketingStrategyUncheckedUpdateManyInput>
    /**
     * Filter which MarketingStrategies to update
     */
    where?: MarketingStrategyWhereInput
    /**
     * Limit how many MarketingStrategies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketingStrategyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MarketingStrategy upsert
   */
  export type MarketingStrategyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingStrategy
     */
    select?: MarketingStrategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingStrategy
     */
    omit?: MarketingStrategyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketingStrategyInclude<ExtArgs> | null
    /**
     * The filter to search for the MarketingStrategy to update in case it exists.
     */
    where: MarketingStrategyWhereUniqueInput
    /**
     * In case the MarketingStrategy found by the `where` argument doesn't exist, create a new MarketingStrategy with this data.
     */
    create: XOR<MarketingStrategyCreateInput, MarketingStrategyUncheckedCreateInput>
    /**
     * In case the MarketingStrategy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarketingStrategyUpdateInput, MarketingStrategyUncheckedUpdateInput>
  }

  /**
   * MarketingStrategy delete
   */
  export type MarketingStrategyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingStrategy
     */
    select?: MarketingStrategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingStrategy
     */
    omit?: MarketingStrategyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketingStrategyInclude<ExtArgs> | null
    /**
     * Filter which MarketingStrategy to delete.
     */
    where: MarketingStrategyWhereUniqueInput
  }

  /**
   * MarketingStrategy deleteMany
   */
  export type MarketingStrategyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketingStrategies to delete
     */
    where?: MarketingStrategyWhereInput
    /**
     * Limit how many MarketingStrategies to delete.
     */
    limit?: number
  }

  /**
   * MarketingStrategy without action
   */
  export type MarketingStrategyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingStrategy
     */
    select?: MarketingStrategySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingStrategy
     */
    omit?: MarketingStrategyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketingStrategyInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    role: $Enums.MemberAccessType | null
    email: string | null
    firstname: string | null
    lastname: string | null
    profilePic: string | null
    createdAt: Date | null
    lastSeenAt: Date | null
    personalEmail: string | null
    phoneNumber: string | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    role: $Enums.MemberAccessType | null
    email: string | null
    firstname: string | null
    lastname: string | null
    profilePic: string | null
    createdAt: Date | null
    lastSeenAt: Date | null
    personalEmail: string | null
    phoneNumber: string | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    orgId: number
    role: number
    email: number
    firstname: number
    lastname: number
    profilePic: number
    createdAt: number
    lastSeenAt: number
    personalEmail: number
    phoneNumber: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    id?: true
    orgId?: true
    role?: true
    email?: true
    firstname?: true
    lastname?: true
    profilePic?: true
    createdAt?: true
    lastSeenAt?: true
    personalEmail?: true
    phoneNumber?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    orgId?: true
    role?: true
    email?: true
    firstname?: true
    lastname?: true
    profilePic?: true
    createdAt?: true
    lastSeenAt?: true
    personalEmail?: true
    phoneNumber?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    orgId?: true
    role?: true
    email?: true
    firstname?: true
    lastname?: true
    profilePic?: true
    createdAt?: true
    lastSeenAt?: true
    personalEmail?: true
    phoneNumber?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    orgId: string | null
    role: $Enums.MemberAccessType
    email: string
    firstname: string
    lastname: string
    profilePic: string | null
    createdAt: Date
    lastSeenAt: Date
    personalEmail: string | null
    phoneNumber: string | null
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    role?: boolean
    email?: boolean
    firstname?: boolean
    lastname?: boolean
    profilePic?: boolean
    createdAt?: boolean
    lastSeenAt?: boolean
    personalEmail?: boolean
    phoneNumber?: boolean
    aiUsages?: boolean | Client$aiUsagesArgs<ExtArgs>
    auditLogs?: boolean | Client$auditLogsArgs<ExtArgs>
    ofOrg?: boolean | Client$ofOrgArgs<ExtArgs>
    marketinAIUsages?: boolean | Client$marketinAIUsagesArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    role?: boolean
    email?: boolean
    firstname?: boolean
    lastname?: boolean
    profilePic?: boolean
    createdAt?: boolean
    lastSeenAt?: boolean
    personalEmail?: boolean
    phoneNumber?: boolean
    ofOrg?: boolean | Client$ofOrgArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    role?: boolean
    email?: boolean
    firstname?: boolean
    lastname?: boolean
    profilePic?: boolean
    createdAt?: boolean
    lastSeenAt?: boolean
    personalEmail?: boolean
    phoneNumber?: boolean
    ofOrg?: boolean | Client$ofOrgArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    orgId?: boolean
    role?: boolean
    email?: boolean
    firstname?: boolean
    lastname?: boolean
    profilePic?: boolean
    createdAt?: boolean
    lastSeenAt?: boolean
    personalEmail?: boolean
    phoneNumber?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "role" | "email" | "firstname" | "lastname" | "profilePic" | "createdAt" | "lastSeenAt" | "personalEmail" | "phoneNumber", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aiUsages?: boolean | Client$aiUsagesArgs<ExtArgs>
    auditLogs?: boolean | Client$auditLogsArgs<ExtArgs>
    ofOrg?: boolean | Client$ofOrgArgs<ExtArgs>
    marketinAIUsages?: boolean | Client$marketinAIUsagesArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ofOrg?: boolean | Client$ofOrgArgs<ExtArgs>
  }
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ofOrg?: boolean | Client$ofOrgArgs<ExtArgs>
  }

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      aiUsages: Prisma.$AiUsagePayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
      ofOrg: Prisma.$OrganizationPayload<ExtArgs> | null
      marketinAIUsages: Prisma.$MarketinAIUsagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string | null
      role: $Enums.MemberAccessType
      email: string
      firstname: string
      lastname: string
      profilePic: string | null
      createdAt: Date
      lastSeenAt: Date
      personalEmail: string | null
      phoneNumber: string | null
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aiUsages<T extends Client$aiUsagesArgs<ExtArgs> = {}>(args?: Subset<T, Client$aiUsagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends Client$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, Client$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ofOrg<T extends Client$ofOrgArgs<ExtArgs> = {}>(args?: Subset<T, Client$ofOrgArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    marketinAIUsages<T extends Client$marketinAIUsagesArgs<ExtArgs> = {}>(args?: Subset<T, Client$marketinAIUsagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketinAIUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly orgId: FieldRef<"Client", 'String'>
    readonly role: FieldRef<"Client", 'MemberAccessType'>
    readonly email: FieldRef<"Client", 'String'>
    readonly firstname: FieldRef<"Client", 'String'>
    readonly lastname: FieldRef<"Client", 'String'>
    readonly profilePic: FieldRef<"Client", 'String'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly lastSeenAt: FieldRef<"Client", 'DateTime'>
    readonly personalEmail: FieldRef<"Client", 'String'>
    readonly phoneNumber: FieldRef<"Client", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.aiUsages
   */
  export type Client$aiUsagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsage
     */
    select?: AiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiUsage
     */
    omit?: AiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiUsageInclude<ExtArgs> | null
    where?: AiUsageWhereInput
    orderBy?: AiUsageOrderByWithRelationInput | AiUsageOrderByWithRelationInput[]
    cursor?: AiUsageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AiUsageScalarFieldEnum | AiUsageScalarFieldEnum[]
  }

  /**
   * Client.auditLogs
   */
  export type Client$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * Client.ofOrg
   */
  export type Client$ofOrgArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * Client.marketinAIUsages
   */
  export type Client$marketinAIUsagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketinAIUsage
     */
    select?: MarketinAIUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketinAIUsage
     */
    omit?: MarketinAIUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketinAIUsageInclude<ExtArgs> | null
    where?: MarketinAIUsageWhereInput
    orderBy?: MarketinAIUsageOrderByWithRelationInput | MarketinAIUsageOrderByWithRelationInput[]
    cursor?: MarketinAIUsageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarketinAIUsageScalarFieldEnum | MarketinAIUsageScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Finance
   */

  export type AggregateFinance = {
    _count: FinanceCountAggregateOutputType | null
    _avg: FinanceAvgAggregateOutputType | null
    _sum: FinanceSumAggregateOutputType | null
    _min: FinanceMinAggregateOutputType | null
    _max: FinanceMaxAggregateOutputType | null
  }

  export type FinanceAvgAggregateOutputType = {
    balance: number | null
    revenue: number | null
    expense: number | null
    netProfit: number | null
    margin: number | null
  }

  export type FinanceSumAggregateOutputType = {
    balance: number | null
    revenue: number | null
    expense: number | null
    netProfit: number | null
    margin: number | null
  }

  export type FinanceMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    month: Date | null
    balance: number | null
    revenue: number | null
    expense: number | null
    netProfit: number | null
    margin: number | null
  }

  export type FinanceMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    month: Date | null
    balance: number | null
    revenue: number | null
    expense: number | null
    netProfit: number | null
    margin: number | null
  }

  export type FinanceCountAggregateOutputType = {
    id: number
    orgId: number
    month: number
    balance: number
    revenue: number
    expense: number
    netProfit: number
    margin: number
    _all: number
  }


  export type FinanceAvgAggregateInputType = {
    balance?: true
    revenue?: true
    expense?: true
    netProfit?: true
    margin?: true
  }

  export type FinanceSumAggregateInputType = {
    balance?: true
    revenue?: true
    expense?: true
    netProfit?: true
    margin?: true
  }

  export type FinanceMinAggregateInputType = {
    id?: true
    orgId?: true
    month?: true
    balance?: true
    revenue?: true
    expense?: true
    netProfit?: true
    margin?: true
  }

  export type FinanceMaxAggregateInputType = {
    id?: true
    orgId?: true
    month?: true
    balance?: true
    revenue?: true
    expense?: true
    netProfit?: true
    margin?: true
  }

  export type FinanceCountAggregateInputType = {
    id?: true
    orgId?: true
    month?: true
    balance?: true
    revenue?: true
    expense?: true
    netProfit?: true
    margin?: true
    _all?: true
  }

  export type FinanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Finance to aggregate.
     */
    where?: FinanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Finances to fetch.
     */
    orderBy?: FinanceOrderByWithRelationInput | FinanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Finances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Finances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Finances
    **/
    _count?: true | FinanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FinanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FinanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinanceMaxAggregateInputType
  }

  export type GetFinanceAggregateType<T extends FinanceAggregateArgs> = {
        [P in keyof T & keyof AggregateFinance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinance[P]>
      : GetScalarType<T[P], AggregateFinance[P]>
  }




  export type FinanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinanceWhereInput
    orderBy?: FinanceOrderByWithAggregationInput | FinanceOrderByWithAggregationInput[]
    by: FinanceScalarFieldEnum[] | FinanceScalarFieldEnum
    having?: FinanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinanceCountAggregateInputType | true
    _avg?: FinanceAvgAggregateInputType
    _sum?: FinanceSumAggregateInputType
    _min?: FinanceMinAggregateInputType
    _max?: FinanceMaxAggregateInputType
  }

  export type FinanceGroupByOutputType = {
    id: string
    orgId: string
    month: Date | null
    balance: number | null
    revenue: number | null
    expense: number | null
    netProfit: number | null
    margin: number | null
    _count: FinanceCountAggregateOutputType | null
    _avg: FinanceAvgAggregateOutputType | null
    _sum: FinanceSumAggregateOutputType | null
    _min: FinanceMinAggregateOutputType | null
    _max: FinanceMaxAggregateOutputType | null
  }

  type GetFinanceGroupByPayload<T extends FinanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinanceGroupByOutputType[P]>
            : GetScalarType<T[P], FinanceGroupByOutputType[P]>
        }
      >
    >


  export type FinanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    month?: boolean
    balance?: boolean
    revenue?: boolean
    expense?: boolean
    netProfit?: boolean
    margin?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["finance"]>

  export type FinanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    month?: boolean
    balance?: boolean
    revenue?: boolean
    expense?: boolean
    netProfit?: boolean
    margin?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["finance"]>

  export type FinanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    month?: boolean
    balance?: boolean
    revenue?: boolean
    expense?: boolean
    netProfit?: boolean
    margin?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["finance"]>

  export type FinanceSelectScalar = {
    id?: boolean
    orgId?: boolean
    month?: boolean
    balance?: boolean
    revenue?: boolean
    expense?: boolean
    netProfit?: boolean
    margin?: boolean
  }

  export type FinanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "month" | "balance" | "revenue" | "expense" | "netProfit" | "margin", ExtArgs["result"]["finance"]>
  export type FinanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type FinanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type FinanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $FinancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Finance"
    objects: {
      org: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      month: Date | null
      balance: number | null
      revenue: number | null
      expense: number | null
      netProfit: number | null
      margin: number | null
    }, ExtArgs["result"]["finance"]>
    composites: {}
  }

  type FinanceGetPayload<S extends boolean | null | undefined | FinanceDefaultArgs> = $Result.GetResult<Prisma.$FinancePayload, S>

  type FinanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FinanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FinanceCountAggregateInputType | true
    }

  export interface FinanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Finance'], meta: { name: 'Finance' } }
    /**
     * Find zero or one Finance that matches the filter.
     * @param {FinanceFindUniqueArgs} args - Arguments to find a Finance
     * @example
     * // Get one Finance
     * const finance = await prisma.finance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FinanceFindUniqueArgs>(args: SelectSubset<T, FinanceFindUniqueArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Finance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FinanceFindUniqueOrThrowArgs} args - Arguments to find a Finance
     * @example
     * // Get one Finance
     * const finance = await prisma.finance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FinanceFindUniqueOrThrowArgs>(args: SelectSubset<T, FinanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Finance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceFindFirstArgs} args - Arguments to find a Finance
     * @example
     * // Get one Finance
     * const finance = await prisma.finance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FinanceFindFirstArgs>(args?: SelectSubset<T, FinanceFindFirstArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Finance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceFindFirstOrThrowArgs} args - Arguments to find a Finance
     * @example
     * // Get one Finance
     * const finance = await prisma.finance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FinanceFindFirstOrThrowArgs>(args?: SelectSubset<T, FinanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Finances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Finances
     * const finances = await prisma.finance.findMany()
     * 
     * // Get first 10 Finances
     * const finances = await prisma.finance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const financeWithIdOnly = await prisma.finance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FinanceFindManyArgs>(args?: SelectSubset<T, FinanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Finance.
     * @param {FinanceCreateArgs} args - Arguments to create a Finance.
     * @example
     * // Create one Finance
     * const Finance = await prisma.finance.create({
     *   data: {
     *     // ... data to create a Finance
     *   }
     * })
     * 
     */
    create<T extends FinanceCreateArgs>(args: SelectSubset<T, FinanceCreateArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Finances.
     * @param {FinanceCreateManyArgs} args - Arguments to create many Finances.
     * @example
     * // Create many Finances
     * const finance = await prisma.finance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FinanceCreateManyArgs>(args?: SelectSubset<T, FinanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Finances and returns the data saved in the database.
     * @param {FinanceCreateManyAndReturnArgs} args - Arguments to create many Finances.
     * @example
     * // Create many Finances
     * const finance = await prisma.finance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Finances and only return the `id`
     * const financeWithIdOnly = await prisma.finance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FinanceCreateManyAndReturnArgs>(args?: SelectSubset<T, FinanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Finance.
     * @param {FinanceDeleteArgs} args - Arguments to delete one Finance.
     * @example
     * // Delete one Finance
     * const Finance = await prisma.finance.delete({
     *   where: {
     *     // ... filter to delete one Finance
     *   }
     * })
     * 
     */
    delete<T extends FinanceDeleteArgs>(args: SelectSubset<T, FinanceDeleteArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Finance.
     * @param {FinanceUpdateArgs} args - Arguments to update one Finance.
     * @example
     * // Update one Finance
     * const finance = await prisma.finance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FinanceUpdateArgs>(args: SelectSubset<T, FinanceUpdateArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Finances.
     * @param {FinanceDeleteManyArgs} args - Arguments to filter Finances to delete.
     * @example
     * // Delete a few Finances
     * const { count } = await prisma.finance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FinanceDeleteManyArgs>(args?: SelectSubset<T, FinanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Finances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Finances
     * const finance = await prisma.finance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FinanceUpdateManyArgs>(args: SelectSubset<T, FinanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Finances and returns the data updated in the database.
     * @param {FinanceUpdateManyAndReturnArgs} args - Arguments to update many Finances.
     * @example
     * // Update many Finances
     * const finance = await prisma.finance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Finances and only return the `id`
     * const financeWithIdOnly = await prisma.finance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FinanceUpdateManyAndReturnArgs>(args: SelectSubset<T, FinanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Finance.
     * @param {FinanceUpsertArgs} args - Arguments to update or create a Finance.
     * @example
     * // Update or create a Finance
     * const finance = await prisma.finance.upsert({
     *   create: {
     *     // ... data to create a Finance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Finance we want to update
     *   }
     * })
     */
    upsert<T extends FinanceUpsertArgs>(args: SelectSubset<T, FinanceUpsertArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Finances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceCountArgs} args - Arguments to filter Finances to count.
     * @example
     * // Count the number of Finances
     * const count = await prisma.finance.count({
     *   where: {
     *     // ... the filter for the Finances we want to count
     *   }
     * })
    **/
    count<T extends FinanceCountArgs>(
      args?: Subset<T, FinanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Finance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FinanceAggregateArgs>(args: Subset<T, FinanceAggregateArgs>): Prisma.PrismaPromise<GetFinanceAggregateType<T>>

    /**
     * Group by Finance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FinanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinanceGroupByArgs['orderBy'] }
        : { orderBy?: FinanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FinanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Finance model
   */
  readonly fields: FinanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Finance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    org<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Finance model
   */
  interface FinanceFieldRefs {
    readonly id: FieldRef<"Finance", 'String'>
    readonly orgId: FieldRef<"Finance", 'String'>
    readonly month: FieldRef<"Finance", 'DateTime'>
    readonly balance: FieldRef<"Finance", 'Int'>
    readonly revenue: FieldRef<"Finance", 'Int'>
    readonly expense: FieldRef<"Finance", 'Int'>
    readonly netProfit: FieldRef<"Finance", 'Int'>
    readonly margin: FieldRef<"Finance", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Finance findUnique
   */
  export type FinanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * Filter, which Finance to fetch.
     */
    where: FinanceWhereUniqueInput
  }

  /**
   * Finance findUniqueOrThrow
   */
  export type FinanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * Filter, which Finance to fetch.
     */
    where: FinanceWhereUniqueInput
  }

  /**
   * Finance findFirst
   */
  export type FinanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * Filter, which Finance to fetch.
     */
    where?: FinanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Finances to fetch.
     */
    orderBy?: FinanceOrderByWithRelationInput | FinanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Finances.
     */
    cursor?: FinanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Finances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Finances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Finances.
     */
    distinct?: FinanceScalarFieldEnum | FinanceScalarFieldEnum[]
  }

  /**
   * Finance findFirstOrThrow
   */
  export type FinanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * Filter, which Finance to fetch.
     */
    where?: FinanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Finances to fetch.
     */
    orderBy?: FinanceOrderByWithRelationInput | FinanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Finances.
     */
    cursor?: FinanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Finances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Finances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Finances.
     */
    distinct?: FinanceScalarFieldEnum | FinanceScalarFieldEnum[]
  }

  /**
   * Finance findMany
   */
  export type FinanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * Filter, which Finances to fetch.
     */
    where?: FinanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Finances to fetch.
     */
    orderBy?: FinanceOrderByWithRelationInput | FinanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Finances.
     */
    cursor?: FinanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Finances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Finances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Finances.
     */
    distinct?: FinanceScalarFieldEnum | FinanceScalarFieldEnum[]
  }

  /**
   * Finance create
   */
  export type FinanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Finance.
     */
    data: XOR<FinanceCreateInput, FinanceUncheckedCreateInput>
  }

  /**
   * Finance createMany
   */
  export type FinanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Finances.
     */
    data: FinanceCreateManyInput | FinanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Finance createManyAndReturn
   */
  export type FinanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * The data used to create many Finances.
     */
    data: FinanceCreateManyInput | FinanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Finance update
   */
  export type FinanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Finance.
     */
    data: XOR<FinanceUpdateInput, FinanceUncheckedUpdateInput>
    /**
     * Choose, which Finance to update.
     */
    where: FinanceWhereUniqueInput
  }

  /**
   * Finance updateMany
   */
  export type FinanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Finances.
     */
    data: XOR<FinanceUpdateManyMutationInput, FinanceUncheckedUpdateManyInput>
    /**
     * Filter which Finances to update
     */
    where?: FinanceWhereInput
    /**
     * Limit how many Finances to update.
     */
    limit?: number
  }

  /**
   * Finance updateManyAndReturn
   */
  export type FinanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * The data used to update Finances.
     */
    data: XOR<FinanceUpdateManyMutationInput, FinanceUncheckedUpdateManyInput>
    /**
     * Filter which Finances to update
     */
    where?: FinanceWhereInput
    /**
     * Limit how many Finances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Finance upsert
   */
  export type FinanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Finance to update in case it exists.
     */
    where: FinanceWhereUniqueInput
    /**
     * In case the Finance found by the `where` argument doesn't exist, create a new Finance with this data.
     */
    create: XOR<FinanceCreateInput, FinanceUncheckedCreateInput>
    /**
     * In case the Finance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinanceUpdateInput, FinanceUncheckedUpdateInput>
  }

  /**
   * Finance delete
   */
  export type FinanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * Filter which Finance to delete.
     */
    where: FinanceWhereUniqueInput
  }

  /**
   * Finance deleteMany
   */
  export type FinanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Finances to delete
     */
    where?: FinanceWhereInput
    /**
     * Limit how many Finances to delete.
     */
    limit?: number
  }

  /**
   * Finance without action
   */
  export type FinanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finance
     */
    omit?: FinanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
  }


  /**
   * Model FinanceAnalysis
   */

  export type AggregateFinanceAnalysis = {
    _count: FinanceAnalysisCountAggregateOutputType | null
    _min: FinanceAnalysisMinAggregateOutputType | null
    _max: FinanceAnalysisMaxAggregateOutputType | null
  }

  export type FinanceAnalysisMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    summary: string | null
    createdAt: Date | null
  }

  export type FinanceAnalysisMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    summary: string | null
    createdAt: Date | null
  }

  export type FinanceAnalysisCountAggregateOutputType = {
    id: number
    orgId: number
    summary: number
    categories: number
    monthly: number
    tips: number
    createdAt: number
    _all: number
  }


  export type FinanceAnalysisMinAggregateInputType = {
    id?: true
    orgId?: true
    summary?: true
    createdAt?: true
  }

  export type FinanceAnalysisMaxAggregateInputType = {
    id?: true
    orgId?: true
    summary?: true
    createdAt?: true
  }

  export type FinanceAnalysisCountAggregateInputType = {
    id?: true
    orgId?: true
    summary?: true
    categories?: true
    monthly?: true
    tips?: true
    createdAt?: true
    _all?: true
  }

  export type FinanceAnalysisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinanceAnalysis to aggregate.
     */
    where?: FinanceAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinanceAnalyses to fetch.
     */
    orderBy?: FinanceAnalysisOrderByWithRelationInput | FinanceAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinanceAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinanceAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinanceAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FinanceAnalyses
    **/
    _count?: true | FinanceAnalysisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinanceAnalysisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinanceAnalysisMaxAggregateInputType
  }

  export type GetFinanceAnalysisAggregateType<T extends FinanceAnalysisAggregateArgs> = {
        [P in keyof T & keyof AggregateFinanceAnalysis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinanceAnalysis[P]>
      : GetScalarType<T[P], AggregateFinanceAnalysis[P]>
  }




  export type FinanceAnalysisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinanceAnalysisWhereInput
    orderBy?: FinanceAnalysisOrderByWithAggregationInput | FinanceAnalysisOrderByWithAggregationInput[]
    by: FinanceAnalysisScalarFieldEnum[] | FinanceAnalysisScalarFieldEnum
    having?: FinanceAnalysisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinanceAnalysisCountAggregateInputType | true
    _min?: FinanceAnalysisMinAggregateInputType
    _max?: FinanceAnalysisMaxAggregateInputType
  }

  export type FinanceAnalysisGroupByOutputType = {
    id: string
    orgId: string
    summary: string
    categories: JsonValue
    monthly: JsonValue | null
    tips: JsonValue
    createdAt: Date
    _count: FinanceAnalysisCountAggregateOutputType | null
    _min: FinanceAnalysisMinAggregateOutputType | null
    _max: FinanceAnalysisMaxAggregateOutputType | null
  }

  type GetFinanceAnalysisGroupByPayload<T extends FinanceAnalysisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinanceAnalysisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinanceAnalysisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinanceAnalysisGroupByOutputType[P]>
            : GetScalarType<T[P], FinanceAnalysisGroupByOutputType[P]>
        }
      >
    >


  export type FinanceAnalysisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    summary?: boolean
    categories?: boolean
    monthly?: boolean
    tips?: boolean
    createdAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financeAnalysis"]>

  export type FinanceAnalysisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    summary?: boolean
    categories?: boolean
    monthly?: boolean
    tips?: boolean
    createdAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financeAnalysis"]>

  export type FinanceAnalysisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    summary?: boolean
    categories?: boolean
    monthly?: boolean
    tips?: boolean
    createdAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financeAnalysis"]>

  export type FinanceAnalysisSelectScalar = {
    id?: boolean
    orgId?: boolean
    summary?: boolean
    categories?: boolean
    monthly?: boolean
    tips?: boolean
    createdAt?: boolean
  }

  export type FinanceAnalysisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "summary" | "categories" | "monthly" | "tips" | "createdAt", ExtArgs["result"]["financeAnalysis"]>
  export type FinanceAnalysisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type FinanceAnalysisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type FinanceAnalysisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $FinanceAnalysisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FinanceAnalysis"
    objects: {
      org: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      summary: string
      categories: Prisma.JsonValue
      monthly: Prisma.JsonValue | null
      tips: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["financeAnalysis"]>
    composites: {}
  }

  type FinanceAnalysisGetPayload<S extends boolean | null | undefined | FinanceAnalysisDefaultArgs> = $Result.GetResult<Prisma.$FinanceAnalysisPayload, S>

  type FinanceAnalysisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FinanceAnalysisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FinanceAnalysisCountAggregateInputType | true
    }

  export interface FinanceAnalysisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FinanceAnalysis'], meta: { name: 'FinanceAnalysis' } }
    /**
     * Find zero or one FinanceAnalysis that matches the filter.
     * @param {FinanceAnalysisFindUniqueArgs} args - Arguments to find a FinanceAnalysis
     * @example
     * // Get one FinanceAnalysis
     * const financeAnalysis = await prisma.financeAnalysis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FinanceAnalysisFindUniqueArgs>(args: SelectSubset<T, FinanceAnalysisFindUniqueArgs<ExtArgs>>): Prisma__FinanceAnalysisClient<$Result.GetResult<Prisma.$FinanceAnalysisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FinanceAnalysis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FinanceAnalysisFindUniqueOrThrowArgs} args - Arguments to find a FinanceAnalysis
     * @example
     * // Get one FinanceAnalysis
     * const financeAnalysis = await prisma.financeAnalysis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FinanceAnalysisFindUniqueOrThrowArgs>(args: SelectSubset<T, FinanceAnalysisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FinanceAnalysisClient<$Result.GetResult<Prisma.$FinanceAnalysisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinanceAnalysis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceAnalysisFindFirstArgs} args - Arguments to find a FinanceAnalysis
     * @example
     * // Get one FinanceAnalysis
     * const financeAnalysis = await prisma.financeAnalysis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FinanceAnalysisFindFirstArgs>(args?: SelectSubset<T, FinanceAnalysisFindFirstArgs<ExtArgs>>): Prisma__FinanceAnalysisClient<$Result.GetResult<Prisma.$FinanceAnalysisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinanceAnalysis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceAnalysisFindFirstOrThrowArgs} args - Arguments to find a FinanceAnalysis
     * @example
     * // Get one FinanceAnalysis
     * const financeAnalysis = await prisma.financeAnalysis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FinanceAnalysisFindFirstOrThrowArgs>(args?: SelectSubset<T, FinanceAnalysisFindFirstOrThrowArgs<ExtArgs>>): Prisma__FinanceAnalysisClient<$Result.GetResult<Prisma.$FinanceAnalysisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FinanceAnalyses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceAnalysisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FinanceAnalyses
     * const financeAnalyses = await prisma.financeAnalysis.findMany()
     * 
     * // Get first 10 FinanceAnalyses
     * const financeAnalyses = await prisma.financeAnalysis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const financeAnalysisWithIdOnly = await prisma.financeAnalysis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FinanceAnalysisFindManyArgs>(args?: SelectSubset<T, FinanceAnalysisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinanceAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FinanceAnalysis.
     * @param {FinanceAnalysisCreateArgs} args - Arguments to create a FinanceAnalysis.
     * @example
     * // Create one FinanceAnalysis
     * const FinanceAnalysis = await prisma.financeAnalysis.create({
     *   data: {
     *     // ... data to create a FinanceAnalysis
     *   }
     * })
     * 
     */
    create<T extends FinanceAnalysisCreateArgs>(args: SelectSubset<T, FinanceAnalysisCreateArgs<ExtArgs>>): Prisma__FinanceAnalysisClient<$Result.GetResult<Prisma.$FinanceAnalysisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FinanceAnalyses.
     * @param {FinanceAnalysisCreateManyArgs} args - Arguments to create many FinanceAnalyses.
     * @example
     * // Create many FinanceAnalyses
     * const financeAnalysis = await prisma.financeAnalysis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FinanceAnalysisCreateManyArgs>(args?: SelectSubset<T, FinanceAnalysisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FinanceAnalyses and returns the data saved in the database.
     * @param {FinanceAnalysisCreateManyAndReturnArgs} args - Arguments to create many FinanceAnalyses.
     * @example
     * // Create many FinanceAnalyses
     * const financeAnalysis = await prisma.financeAnalysis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FinanceAnalyses and only return the `id`
     * const financeAnalysisWithIdOnly = await prisma.financeAnalysis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FinanceAnalysisCreateManyAndReturnArgs>(args?: SelectSubset<T, FinanceAnalysisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinanceAnalysisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FinanceAnalysis.
     * @param {FinanceAnalysisDeleteArgs} args - Arguments to delete one FinanceAnalysis.
     * @example
     * // Delete one FinanceAnalysis
     * const FinanceAnalysis = await prisma.financeAnalysis.delete({
     *   where: {
     *     // ... filter to delete one FinanceAnalysis
     *   }
     * })
     * 
     */
    delete<T extends FinanceAnalysisDeleteArgs>(args: SelectSubset<T, FinanceAnalysisDeleteArgs<ExtArgs>>): Prisma__FinanceAnalysisClient<$Result.GetResult<Prisma.$FinanceAnalysisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FinanceAnalysis.
     * @param {FinanceAnalysisUpdateArgs} args - Arguments to update one FinanceAnalysis.
     * @example
     * // Update one FinanceAnalysis
     * const financeAnalysis = await prisma.financeAnalysis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FinanceAnalysisUpdateArgs>(args: SelectSubset<T, FinanceAnalysisUpdateArgs<ExtArgs>>): Prisma__FinanceAnalysisClient<$Result.GetResult<Prisma.$FinanceAnalysisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FinanceAnalyses.
     * @param {FinanceAnalysisDeleteManyArgs} args - Arguments to filter FinanceAnalyses to delete.
     * @example
     * // Delete a few FinanceAnalyses
     * const { count } = await prisma.financeAnalysis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FinanceAnalysisDeleteManyArgs>(args?: SelectSubset<T, FinanceAnalysisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinanceAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceAnalysisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FinanceAnalyses
     * const financeAnalysis = await prisma.financeAnalysis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FinanceAnalysisUpdateManyArgs>(args: SelectSubset<T, FinanceAnalysisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinanceAnalyses and returns the data updated in the database.
     * @param {FinanceAnalysisUpdateManyAndReturnArgs} args - Arguments to update many FinanceAnalyses.
     * @example
     * // Update many FinanceAnalyses
     * const financeAnalysis = await prisma.financeAnalysis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FinanceAnalyses and only return the `id`
     * const financeAnalysisWithIdOnly = await prisma.financeAnalysis.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FinanceAnalysisUpdateManyAndReturnArgs>(args: SelectSubset<T, FinanceAnalysisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinanceAnalysisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FinanceAnalysis.
     * @param {FinanceAnalysisUpsertArgs} args - Arguments to update or create a FinanceAnalysis.
     * @example
     * // Update or create a FinanceAnalysis
     * const financeAnalysis = await prisma.financeAnalysis.upsert({
     *   create: {
     *     // ... data to create a FinanceAnalysis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FinanceAnalysis we want to update
     *   }
     * })
     */
    upsert<T extends FinanceAnalysisUpsertArgs>(args: SelectSubset<T, FinanceAnalysisUpsertArgs<ExtArgs>>): Prisma__FinanceAnalysisClient<$Result.GetResult<Prisma.$FinanceAnalysisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FinanceAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceAnalysisCountArgs} args - Arguments to filter FinanceAnalyses to count.
     * @example
     * // Count the number of FinanceAnalyses
     * const count = await prisma.financeAnalysis.count({
     *   where: {
     *     // ... the filter for the FinanceAnalyses we want to count
     *   }
     * })
    **/
    count<T extends FinanceAnalysisCountArgs>(
      args?: Subset<T, FinanceAnalysisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinanceAnalysisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FinanceAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceAnalysisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FinanceAnalysisAggregateArgs>(args: Subset<T, FinanceAnalysisAggregateArgs>): Prisma.PrismaPromise<GetFinanceAnalysisAggregateType<T>>

    /**
     * Group by FinanceAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceAnalysisGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FinanceAnalysisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinanceAnalysisGroupByArgs['orderBy'] }
        : { orderBy?: FinanceAnalysisGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FinanceAnalysisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinanceAnalysisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FinanceAnalysis model
   */
  readonly fields: FinanceAnalysisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FinanceAnalysis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinanceAnalysisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    org<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FinanceAnalysis model
   */
  interface FinanceAnalysisFieldRefs {
    readonly id: FieldRef<"FinanceAnalysis", 'String'>
    readonly orgId: FieldRef<"FinanceAnalysis", 'String'>
    readonly summary: FieldRef<"FinanceAnalysis", 'String'>
    readonly categories: FieldRef<"FinanceAnalysis", 'Json'>
    readonly monthly: FieldRef<"FinanceAnalysis", 'Json'>
    readonly tips: FieldRef<"FinanceAnalysis", 'Json'>
    readonly createdAt: FieldRef<"FinanceAnalysis", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FinanceAnalysis findUnique
   */
  export type FinanceAnalysisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceAnalysis
     */
    select?: FinanceAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceAnalysis
     */
    omit?: FinanceAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which FinanceAnalysis to fetch.
     */
    where: FinanceAnalysisWhereUniqueInput
  }

  /**
   * FinanceAnalysis findUniqueOrThrow
   */
  export type FinanceAnalysisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceAnalysis
     */
    select?: FinanceAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceAnalysis
     */
    omit?: FinanceAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which FinanceAnalysis to fetch.
     */
    where: FinanceAnalysisWhereUniqueInput
  }

  /**
   * FinanceAnalysis findFirst
   */
  export type FinanceAnalysisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceAnalysis
     */
    select?: FinanceAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceAnalysis
     */
    omit?: FinanceAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which FinanceAnalysis to fetch.
     */
    where?: FinanceAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinanceAnalyses to fetch.
     */
    orderBy?: FinanceAnalysisOrderByWithRelationInput | FinanceAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinanceAnalyses.
     */
    cursor?: FinanceAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinanceAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinanceAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinanceAnalyses.
     */
    distinct?: FinanceAnalysisScalarFieldEnum | FinanceAnalysisScalarFieldEnum[]
  }

  /**
   * FinanceAnalysis findFirstOrThrow
   */
  export type FinanceAnalysisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceAnalysis
     */
    select?: FinanceAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceAnalysis
     */
    omit?: FinanceAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which FinanceAnalysis to fetch.
     */
    where?: FinanceAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinanceAnalyses to fetch.
     */
    orderBy?: FinanceAnalysisOrderByWithRelationInput | FinanceAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinanceAnalyses.
     */
    cursor?: FinanceAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinanceAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinanceAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinanceAnalyses.
     */
    distinct?: FinanceAnalysisScalarFieldEnum | FinanceAnalysisScalarFieldEnum[]
  }

  /**
   * FinanceAnalysis findMany
   */
  export type FinanceAnalysisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceAnalysis
     */
    select?: FinanceAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceAnalysis
     */
    omit?: FinanceAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which FinanceAnalyses to fetch.
     */
    where?: FinanceAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinanceAnalyses to fetch.
     */
    orderBy?: FinanceAnalysisOrderByWithRelationInput | FinanceAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FinanceAnalyses.
     */
    cursor?: FinanceAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinanceAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinanceAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinanceAnalyses.
     */
    distinct?: FinanceAnalysisScalarFieldEnum | FinanceAnalysisScalarFieldEnum[]
  }

  /**
   * FinanceAnalysis create
   */
  export type FinanceAnalysisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceAnalysis
     */
    select?: FinanceAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceAnalysis
     */
    omit?: FinanceAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to create a FinanceAnalysis.
     */
    data: XOR<FinanceAnalysisCreateInput, FinanceAnalysisUncheckedCreateInput>
  }

  /**
   * FinanceAnalysis createMany
   */
  export type FinanceAnalysisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FinanceAnalyses.
     */
    data: FinanceAnalysisCreateManyInput | FinanceAnalysisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FinanceAnalysis createManyAndReturn
   */
  export type FinanceAnalysisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceAnalysis
     */
    select?: FinanceAnalysisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceAnalysis
     */
    omit?: FinanceAnalysisOmit<ExtArgs> | null
    /**
     * The data used to create many FinanceAnalyses.
     */
    data: FinanceAnalysisCreateManyInput | FinanceAnalysisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceAnalysisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FinanceAnalysis update
   */
  export type FinanceAnalysisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceAnalysis
     */
    select?: FinanceAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceAnalysis
     */
    omit?: FinanceAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to update a FinanceAnalysis.
     */
    data: XOR<FinanceAnalysisUpdateInput, FinanceAnalysisUncheckedUpdateInput>
    /**
     * Choose, which FinanceAnalysis to update.
     */
    where: FinanceAnalysisWhereUniqueInput
  }

  /**
   * FinanceAnalysis updateMany
   */
  export type FinanceAnalysisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FinanceAnalyses.
     */
    data: XOR<FinanceAnalysisUpdateManyMutationInput, FinanceAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which FinanceAnalyses to update
     */
    where?: FinanceAnalysisWhereInput
    /**
     * Limit how many FinanceAnalyses to update.
     */
    limit?: number
  }

  /**
   * FinanceAnalysis updateManyAndReturn
   */
  export type FinanceAnalysisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceAnalysis
     */
    select?: FinanceAnalysisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceAnalysis
     */
    omit?: FinanceAnalysisOmit<ExtArgs> | null
    /**
     * The data used to update FinanceAnalyses.
     */
    data: XOR<FinanceAnalysisUpdateManyMutationInput, FinanceAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which FinanceAnalyses to update
     */
    where?: FinanceAnalysisWhereInput
    /**
     * Limit how many FinanceAnalyses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceAnalysisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FinanceAnalysis upsert
   */
  export type FinanceAnalysisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceAnalysis
     */
    select?: FinanceAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceAnalysis
     */
    omit?: FinanceAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceAnalysisInclude<ExtArgs> | null
    /**
     * The filter to search for the FinanceAnalysis to update in case it exists.
     */
    where: FinanceAnalysisWhereUniqueInput
    /**
     * In case the FinanceAnalysis found by the `where` argument doesn't exist, create a new FinanceAnalysis with this data.
     */
    create: XOR<FinanceAnalysisCreateInput, FinanceAnalysisUncheckedCreateInput>
    /**
     * In case the FinanceAnalysis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinanceAnalysisUpdateInput, FinanceAnalysisUncheckedUpdateInput>
  }

  /**
   * FinanceAnalysis delete
   */
  export type FinanceAnalysisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceAnalysis
     */
    select?: FinanceAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceAnalysis
     */
    omit?: FinanceAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceAnalysisInclude<ExtArgs> | null
    /**
     * Filter which FinanceAnalysis to delete.
     */
    where: FinanceAnalysisWhereUniqueInput
  }

  /**
   * FinanceAnalysis deleteMany
   */
  export type FinanceAnalysisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinanceAnalyses to delete
     */
    where?: FinanceAnalysisWhereInput
    /**
     * Limit how many FinanceAnalyses to delete.
     */
    limit?: number
  }

  /**
   * FinanceAnalysis without action
   */
  export type FinanceAnalysisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceAnalysis
     */
    select?: FinanceAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceAnalysis
     */
    omit?: FinanceAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceAnalysisInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    reach: number | null
  }

  export type PostSumAggregateOutputType = {
    reach: number | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    title: string | null
    content: string | null
    platform: string | null
    reach: number | null
    publishedAt: Date | null
    published: boolean | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    title: string | null
    content: string | null
    platform: string | null
    reach: number | null
    publishedAt: Date | null
    published: boolean | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    orgId: number
    title: number
    content: number
    platform: number
    reach: number
    publishedAt: number
    published: number
    images: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    reach?: true
  }

  export type PostSumAggregateInputType = {
    reach?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    orgId?: true
    title?: true
    content?: true
    platform?: true
    reach?: true
    publishedAt?: true
    published?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    orgId?: true
    title?: true
    content?: true
    platform?: true
    reach?: true
    publishedAt?: true
    published?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    orgId?: true
    title?: true
    content?: true
    platform?: true
    reach?: true
    publishedAt?: true
    published?: true
    images?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    orgId: string
    title: string
    content: string
    platform: string
    reach: number
    publishedAt: Date
    published: boolean
    images: JsonValue
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    title?: boolean
    content?: boolean
    platform?: boolean
    reach?: boolean
    publishedAt?: boolean
    published?: boolean
    images?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    title?: boolean
    content?: boolean
    platform?: boolean
    reach?: boolean
    publishedAt?: boolean
    published?: boolean
    images?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    title?: boolean
    content?: boolean
    platform?: boolean
    reach?: boolean
    publishedAt?: boolean
    published?: boolean
    images?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    orgId?: boolean
    title?: boolean
    content?: boolean
    platform?: boolean
    reach?: boolean
    publishedAt?: boolean
    published?: boolean
    images?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "title" | "content" | "platform" | "reach" | "publishedAt" | "published" | "images", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      org: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      title: string
      content: string
      platform: string
      reach: number
      publishedAt: Date
      published: boolean
      images: Prisma.JsonValue
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    org<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly orgId: FieldRef<"Post", 'String'>
    readonly title: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'String'>
    readonly platform: FieldRef<"Post", 'String'>
    readonly reach: FieldRef<"Post", 'Int'>
    readonly publishedAt: FieldRef<"Post", 'DateTime'>
    readonly published: FieldRef<"Post", 'Boolean'>
    readonly images: FieldRef<"Post", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Administrator
   */

  export type AggregateAdministrator = {
    _count: AdministratorCountAggregateOutputType | null
    _min: AdministratorMinAggregateOutputType | null
    _max: AdministratorMaxAggregateOutputType | null
  }

  export type AdministratorMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
    lastAccessTime: Date | null
  }

  export type AdministratorMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
    lastAccessTime: Date | null
  }

  export type AdministratorCountAggregateOutputType = {
    id: number
    email: number
    username: number
    password: number
    createdAt: number
    lastAccessTime: number
    _all: number
  }


  export type AdministratorMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    createdAt?: true
    lastAccessTime?: true
  }

  export type AdministratorMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    createdAt?: true
    lastAccessTime?: true
  }

  export type AdministratorCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    createdAt?: true
    lastAccessTime?: true
    _all?: true
  }

  export type AdministratorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Administrator to aggregate.
     */
    where?: AdministratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administrators to fetch.
     */
    orderBy?: AdministratorOrderByWithRelationInput | AdministratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdministratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administrators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administrators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Administrators
    **/
    _count?: true | AdministratorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdministratorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdministratorMaxAggregateInputType
  }

  export type GetAdministratorAggregateType<T extends AdministratorAggregateArgs> = {
        [P in keyof T & keyof AggregateAdministrator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdministrator[P]>
      : GetScalarType<T[P], AggregateAdministrator[P]>
  }




  export type AdministratorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdministratorWhereInput
    orderBy?: AdministratorOrderByWithAggregationInput | AdministratorOrderByWithAggregationInput[]
    by: AdministratorScalarFieldEnum[] | AdministratorScalarFieldEnum
    having?: AdministratorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdministratorCountAggregateInputType | true
    _min?: AdministratorMinAggregateInputType
    _max?: AdministratorMaxAggregateInputType
  }

  export type AdministratorGroupByOutputType = {
    id: string
    email: string
    username: string
    password: string
    createdAt: Date
    lastAccessTime: Date
    _count: AdministratorCountAggregateOutputType | null
    _min: AdministratorMinAggregateOutputType | null
    _max: AdministratorMaxAggregateOutputType | null
  }

  type GetAdministratorGroupByPayload<T extends AdministratorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdministratorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdministratorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdministratorGroupByOutputType[P]>
            : GetScalarType<T[P], AdministratorGroupByOutputType[P]>
        }
      >
    >


  export type AdministratorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    lastAccessTime?: boolean
  }, ExtArgs["result"]["administrator"]>

  export type AdministratorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    lastAccessTime?: boolean
  }, ExtArgs["result"]["administrator"]>

  export type AdministratorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    lastAccessTime?: boolean
  }, ExtArgs["result"]["administrator"]>

  export type AdministratorSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    lastAccessTime?: boolean
  }

  export type AdministratorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "password" | "createdAt" | "lastAccessTime", ExtArgs["result"]["administrator"]>

  export type $AdministratorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Administrator"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string
      password: string
      createdAt: Date
      lastAccessTime: Date
    }, ExtArgs["result"]["administrator"]>
    composites: {}
  }

  type AdministratorGetPayload<S extends boolean | null | undefined | AdministratorDefaultArgs> = $Result.GetResult<Prisma.$AdministratorPayload, S>

  type AdministratorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdministratorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdministratorCountAggregateInputType | true
    }

  export interface AdministratorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Administrator'], meta: { name: 'Administrator' } }
    /**
     * Find zero or one Administrator that matches the filter.
     * @param {AdministratorFindUniqueArgs} args - Arguments to find a Administrator
     * @example
     * // Get one Administrator
     * const administrator = await prisma.administrator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdministratorFindUniqueArgs>(args: SelectSubset<T, AdministratorFindUniqueArgs<ExtArgs>>): Prisma__AdministratorClient<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Administrator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdministratorFindUniqueOrThrowArgs} args - Arguments to find a Administrator
     * @example
     * // Get one Administrator
     * const administrator = await prisma.administrator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdministratorFindUniqueOrThrowArgs>(args: SelectSubset<T, AdministratorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdministratorClient<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Administrator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministratorFindFirstArgs} args - Arguments to find a Administrator
     * @example
     * // Get one Administrator
     * const administrator = await prisma.administrator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdministratorFindFirstArgs>(args?: SelectSubset<T, AdministratorFindFirstArgs<ExtArgs>>): Prisma__AdministratorClient<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Administrator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministratorFindFirstOrThrowArgs} args - Arguments to find a Administrator
     * @example
     * // Get one Administrator
     * const administrator = await prisma.administrator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdministratorFindFirstOrThrowArgs>(args?: SelectSubset<T, AdministratorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdministratorClient<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Administrators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministratorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Administrators
     * const administrators = await prisma.administrator.findMany()
     * 
     * // Get first 10 Administrators
     * const administrators = await prisma.administrator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const administratorWithIdOnly = await prisma.administrator.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdministratorFindManyArgs>(args?: SelectSubset<T, AdministratorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Administrator.
     * @param {AdministratorCreateArgs} args - Arguments to create a Administrator.
     * @example
     * // Create one Administrator
     * const Administrator = await prisma.administrator.create({
     *   data: {
     *     // ... data to create a Administrator
     *   }
     * })
     * 
     */
    create<T extends AdministratorCreateArgs>(args: SelectSubset<T, AdministratorCreateArgs<ExtArgs>>): Prisma__AdministratorClient<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Administrators.
     * @param {AdministratorCreateManyArgs} args - Arguments to create many Administrators.
     * @example
     * // Create many Administrators
     * const administrator = await prisma.administrator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdministratorCreateManyArgs>(args?: SelectSubset<T, AdministratorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Administrators and returns the data saved in the database.
     * @param {AdministratorCreateManyAndReturnArgs} args - Arguments to create many Administrators.
     * @example
     * // Create many Administrators
     * const administrator = await prisma.administrator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Administrators and only return the `id`
     * const administratorWithIdOnly = await prisma.administrator.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdministratorCreateManyAndReturnArgs>(args?: SelectSubset<T, AdministratorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Administrator.
     * @param {AdministratorDeleteArgs} args - Arguments to delete one Administrator.
     * @example
     * // Delete one Administrator
     * const Administrator = await prisma.administrator.delete({
     *   where: {
     *     // ... filter to delete one Administrator
     *   }
     * })
     * 
     */
    delete<T extends AdministratorDeleteArgs>(args: SelectSubset<T, AdministratorDeleteArgs<ExtArgs>>): Prisma__AdministratorClient<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Administrator.
     * @param {AdministratorUpdateArgs} args - Arguments to update one Administrator.
     * @example
     * // Update one Administrator
     * const administrator = await prisma.administrator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdministratorUpdateArgs>(args: SelectSubset<T, AdministratorUpdateArgs<ExtArgs>>): Prisma__AdministratorClient<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Administrators.
     * @param {AdministratorDeleteManyArgs} args - Arguments to filter Administrators to delete.
     * @example
     * // Delete a few Administrators
     * const { count } = await prisma.administrator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdministratorDeleteManyArgs>(args?: SelectSubset<T, AdministratorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Administrators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministratorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Administrators
     * const administrator = await prisma.administrator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdministratorUpdateManyArgs>(args: SelectSubset<T, AdministratorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Administrators and returns the data updated in the database.
     * @param {AdministratorUpdateManyAndReturnArgs} args - Arguments to update many Administrators.
     * @example
     * // Update many Administrators
     * const administrator = await prisma.administrator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Administrators and only return the `id`
     * const administratorWithIdOnly = await prisma.administrator.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdministratorUpdateManyAndReturnArgs>(args: SelectSubset<T, AdministratorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Administrator.
     * @param {AdministratorUpsertArgs} args - Arguments to update or create a Administrator.
     * @example
     * // Update or create a Administrator
     * const administrator = await prisma.administrator.upsert({
     *   create: {
     *     // ... data to create a Administrator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Administrator we want to update
     *   }
     * })
     */
    upsert<T extends AdministratorUpsertArgs>(args: SelectSubset<T, AdministratorUpsertArgs<ExtArgs>>): Prisma__AdministratorClient<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Administrators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministratorCountArgs} args - Arguments to filter Administrators to count.
     * @example
     * // Count the number of Administrators
     * const count = await prisma.administrator.count({
     *   where: {
     *     // ... the filter for the Administrators we want to count
     *   }
     * })
    **/
    count<T extends AdministratorCountArgs>(
      args?: Subset<T, AdministratorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdministratorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Administrator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministratorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdministratorAggregateArgs>(args: Subset<T, AdministratorAggregateArgs>): Prisma.PrismaPromise<GetAdministratorAggregateType<T>>

    /**
     * Group by Administrator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministratorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdministratorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdministratorGroupByArgs['orderBy'] }
        : { orderBy?: AdministratorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdministratorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdministratorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Administrator model
   */
  readonly fields: AdministratorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Administrator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdministratorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Administrator model
   */
  interface AdministratorFieldRefs {
    readonly id: FieldRef<"Administrator", 'String'>
    readonly email: FieldRef<"Administrator", 'String'>
    readonly username: FieldRef<"Administrator", 'String'>
    readonly password: FieldRef<"Administrator", 'String'>
    readonly createdAt: FieldRef<"Administrator", 'DateTime'>
    readonly lastAccessTime: FieldRef<"Administrator", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Administrator findUnique
   */
  export type AdministratorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrator
     */
    omit?: AdministratorOmit<ExtArgs> | null
    /**
     * Filter, which Administrator to fetch.
     */
    where: AdministratorWhereUniqueInput
  }

  /**
   * Administrator findUniqueOrThrow
   */
  export type AdministratorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrator
     */
    omit?: AdministratorOmit<ExtArgs> | null
    /**
     * Filter, which Administrator to fetch.
     */
    where: AdministratorWhereUniqueInput
  }

  /**
   * Administrator findFirst
   */
  export type AdministratorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrator
     */
    omit?: AdministratorOmit<ExtArgs> | null
    /**
     * Filter, which Administrator to fetch.
     */
    where?: AdministratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administrators to fetch.
     */
    orderBy?: AdministratorOrderByWithRelationInput | AdministratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Administrators.
     */
    cursor?: AdministratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administrators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administrators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Administrators.
     */
    distinct?: AdministratorScalarFieldEnum | AdministratorScalarFieldEnum[]
  }

  /**
   * Administrator findFirstOrThrow
   */
  export type AdministratorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrator
     */
    omit?: AdministratorOmit<ExtArgs> | null
    /**
     * Filter, which Administrator to fetch.
     */
    where?: AdministratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administrators to fetch.
     */
    orderBy?: AdministratorOrderByWithRelationInput | AdministratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Administrators.
     */
    cursor?: AdministratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administrators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administrators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Administrators.
     */
    distinct?: AdministratorScalarFieldEnum | AdministratorScalarFieldEnum[]
  }

  /**
   * Administrator findMany
   */
  export type AdministratorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrator
     */
    omit?: AdministratorOmit<ExtArgs> | null
    /**
     * Filter, which Administrators to fetch.
     */
    where?: AdministratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administrators to fetch.
     */
    orderBy?: AdministratorOrderByWithRelationInput | AdministratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Administrators.
     */
    cursor?: AdministratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administrators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administrators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Administrators.
     */
    distinct?: AdministratorScalarFieldEnum | AdministratorScalarFieldEnum[]
  }

  /**
   * Administrator create
   */
  export type AdministratorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrator
     */
    omit?: AdministratorOmit<ExtArgs> | null
    /**
     * The data needed to create a Administrator.
     */
    data: XOR<AdministratorCreateInput, AdministratorUncheckedCreateInput>
  }

  /**
   * Administrator createMany
   */
  export type AdministratorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Administrators.
     */
    data: AdministratorCreateManyInput | AdministratorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Administrator createManyAndReturn
   */
  export type AdministratorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Administrator
     */
    omit?: AdministratorOmit<ExtArgs> | null
    /**
     * The data used to create many Administrators.
     */
    data: AdministratorCreateManyInput | AdministratorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Administrator update
   */
  export type AdministratorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrator
     */
    omit?: AdministratorOmit<ExtArgs> | null
    /**
     * The data needed to update a Administrator.
     */
    data: XOR<AdministratorUpdateInput, AdministratorUncheckedUpdateInput>
    /**
     * Choose, which Administrator to update.
     */
    where: AdministratorWhereUniqueInput
  }

  /**
   * Administrator updateMany
   */
  export type AdministratorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Administrators.
     */
    data: XOR<AdministratorUpdateManyMutationInput, AdministratorUncheckedUpdateManyInput>
    /**
     * Filter which Administrators to update
     */
    where?: AdministratorWhereInput
    /**
     * Limit how many Administrators to update.
     */
    limit?: number
  }

  /**
   * Administrator updateManyAndReturn
   */
  export type AdministratorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Administrator
     */
    omit?: AdministratorOmit<ExtArgs> | null
    /**
     * The data used to update Administrators.
     */
    data: XOR<AdministratorUpdateManyMutationInput, AdministratorUncheckedUpdateManyInput>
    /**
     * Filter which Administrators to update
     */
    where?: AdministratorWhereInput
    /**
     * Limit how many Administrators to update.
     */
    limit?: number
  }

  /**
   * Administrator upsert
   */
  export type AdministratorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrator
     */
    omit?: AdministratorOmit<ExtArgs> | null
    /**
     * The filter to search for the Administrator to update in case it exists.
     */
    where: AdministratorWhereUniqueInput
    /**
     * In case the Administrator found by the `where` argument doesn't exist, create a new Administrator with this data.
     */
    create: XOR<AdministratorCreateInput, AdministratorUncheckedCreateInput>
    /**
     * In case the Administrator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdministratorUpdateInput, AdministratorUncheckedUpdateInput>
  }

  /**
   * Administrator delete
   */
  export type AdministratorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrator
     */
    omit?: AdministratorOmit<ExtArgs> | null
    /**
     * Filter which Administrator to delete.
     */
    where: AdministratorWhereUniqueInput
  }

  /**
   * Administrator deleteMany
   */
  export type AdministratorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Administrators to delete
     */
    where?: AdministratorWhereInput
    /**
     * Limit how many Administrators to delete.
     */
    limit?: number
  }

  /**
   * Administrator without action
   */
  export type AdministratorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrator
     */
    omit?: AdministratorOmit<ExtArgs> | null
  }


  /**
   * Model InviteCode
   */

  export type AggregateInviteCode = {
    _count: InviteCodeCountAggregateOutputType | null
    _min: InviteCodeMinAggregateOutputType | null
    _max: InviteCodeMaxAggregateOutputType | null
  }

  export type InviteCodeMinAggregateOutputType = {
    code: string | null
    orgId: string | null
    createdBy: string | null
    expiresAt: Date | null
  }

  export type InviteCodeMaxAggregateOutputType = {
    code: string | null
    orgId: string | null
    createdBy: string | null
    expiresAt: Date | null
  }

  export type InviteCodeCountAggregateOutputType = {
    code: number
    orgId: number
    createdBy: number
    expiresAt: number
    _all: number
  }


  export type InviteCodeMinAggregateInputType = {
    code?: true
    orgId?: true
    createdBy?: true
    expiresAt?: true
  }

  export type InviteCodeMaxAggregateInputType = {
    code?: true
    orgId?: true
    createdBy?: true
    expiresAt?: true
  }

  export type InviteCodeCountAggregateInputType = {
    code?: true
    orgId?: true
    createdBy?: true
    expiresAt?: true
    _all?: true
  }

  export type InviteCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InviteCode to aggregate.
     */
    where?: InviteCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InviteCodes to fetch.
     */
    orderBy?: InviteCodeOrderByWithRelationInput | InviteCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InviteCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InviteCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InviteCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InviteCodes
    **/
    _count?: true | InviteCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InviteCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InviteCodeMaxAggregateInputType
  }

  export type GetInviteCodeAggregateType<T extends InviteCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateInviteCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInviteCode[P]>
      : GetScalarType<T[P], AggregateInviteCode[P]>
  }




  export type InviteCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InviteCodeWhereInput
    orderBy?: InviteCodeOrderByWithAggregationInput | InviteCodeOrderByWithAggregationInput[]
    by: InviteCodeScalarFieldEnum[] | InviteCodeScalarFieldEnum
    having?: InviteCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InviteCodeCountAggregateInputType | true
    _min?: InviteCodeMinAggregateInputType
    _max?: InviteCodeMaxAggregateInputType
  }

  export type InviteCodeGroupByOutputType = {
    code: string
    orgId: string
    createdBy: string
    expiresAt: Date
    _count: InviteCodeCountAggregateOutputType | null
    _min: InviteCodeMinAggregateOutputType | null
    _max: InviteCodeMaxAggregateOutputType | null
  }

  type GetInviteCodeGroupByPayload<T extends InviteCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InviteCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InviteCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InviteCodeGroupByOutputType[P]>
            : GetScalarType<T[P], InviteCodeGroupByOutputType[P]>
        }
      >
    >


  export type InviteCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    orgId?: boolean
    createdBy?: boolean
    expiresAt?: boolean
    Organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inviteCode"]>

  export type InviteCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    orgId?: boolean
    createdBy?: boolean
    expiresAt?: boolean
    Organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inviteCode"]>

  export type InviteCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    orgId?: boolean
    createdBy?: boolean
    expiresAt?: boolean
    Organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inviteCode"]>

  export type InviteCodeSelectScalar = {
    code?: boolean
    orgId?: boolean
    createdBy?: boolean
    expiresAt?: boolean
  }

  export type InviteCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"code" | "orgId" | "createdBy" | "expiresAt", ExtArgs["result"]["inviteCode"]>
  export type InviteCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type InviteCodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type InviteCodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $InviteCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InviteCode"
    objects: {
      Organization: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      code: string
      orgId: string
      createdBy: string
      expiresAt: Date
    }, ExtArgs["result"]["inviteCode"]>
    composites: {}
  }

  type InviteCodeGetPayload<S extends boolean | null | undefined | InviteCodeDefaultArgs> = $Result.GetResult<Prisma.$InviteCodePayload, S>

  type InviteCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InviteCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InviteCodeCountAggregateInputType | true
    }

  export interface InviteCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InviteCode'], meta: { name: 'InviteCode' } }
    /**
     * Find zero or one InviteCode that matches the filter.
     * @param {InviteCodeFindUniqueArgs} args - Arguments to find a InviteCode
     * @example
     * // Get one InviteCode
     * const inviteCode = await prisma.inviteCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InviteCodeFindUniqueArgs>(args: SelectSubset<T, InviteCodeFindUniqueArgs<ExtArgs>>): Prisma__InviteCodeClient<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InviteCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InviteCodeFindUniqueOrThrowArgs} args - Arguments to find a InviteCode
     * @example
     * // Get one InviteCode
     * const inviteCode = await prisma.inviteCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InviteCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, InviteCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InviteCodeClient<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InviteCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCodeFindFirstArgs} args - Arguments to find a InviteCode
     * @example
     * // Get one InviteCode
     * const inviteCode = await prisma.inviteCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InviteCodeFindFirstArgs>(args?: SelectSubset<T, InviteCodeFindFirstArgs<ExtArgs>>): Prisma__InviteCodeClient<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InviteCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCodeFindFirstOrThrowArgs} args - Arguments to find a InviteCode
     * @example
     * // Get one InviteCode
     * const inviteCode = await prisma.inviteCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InviteCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, InviteCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__InviteCodeClient<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InviteCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InviteCodes
     * const inviteCodes = await prisma.inviteCode.findMany()
     * 
     * // Get first 10 InviteCodes
     * const inviteCodes = await prisma.inviteCode.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const inviteCodeWithCodeOnly = await prisma.inviteCode.findMany({ select: { code: true } })
     * 
     */
    findMany<T extends InviteCodeFindManyArgs>(args?: SelectSubset<T, InviteCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InviteCode.
     * @param {InviteCodeCreateArgs} args - Arguments to create a InviteCode.
     * @example
     * // Create one InviteCode
     * const InviteCode = await prisma.inviteCode.create({
     *   data: {
     *     // ... data to create a InviteCode
     *   }
     * })
     * 
     */
    create<T extends InviteCodeCreateArgs>(args: SelectSubset<T, InviteCodeCreateArgs<ExtArgs>>): Prisma__InviteCodeClient<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InviteCodes.
     * @param {InviteCodeCreateManyArgs} args - Arguments to create many InviteCodes.
     * @example
     * // Create many InviteCodes
     * const inviteCode = await prisma.inviteCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InviteCodeCreateManyArgs>(args?: SelectSubset<T, InviteCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InviteCodes and returns the data saved in the database.
     * @param {InviteCodeCreateManyAndReturnArgs} args - Arguments to create many InviteCodes.
     * @example
     * // Create many InviteCodes
     * const inviteCode = await prisma.inviteCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InviteCodes and only return the `code`
     * const inviteCodeWithCodeOnly = await prisma.inviteCode.createManyAndReturn({
     *   select: { code: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InviteCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, InviteCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InviteCode.
     * @param {InviteCodeDeleteArgs} args - Arguments to delete one InviteCode.
     * @example
     * // Delete one InviteCode
     * const InviteCode = await prisma.inviteCode.delete({
     *   where: {
     *     // ... filter to delete one InviteCode
     *   }
     * })
     * 
     */
    delete<T extends InviteCodeDeleteArgs>(args: SelectSubset<T, InviteCodeDeleteArgs<ExtArgs>>): Prisma__InviteCodeClient<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InviteCode.
     * @param {InviteCodeUpdateArgs} args - Arguments to update one InviteCode.
     * @example
     * // Update one InviteCode
     * const inviteCode = await prisma.inviteCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InviteCodeUpdateArgs>(args: SelectSubset<T, InviteCodeUpdateArgs<ExtArgs>>): Prisma__InviteCodeClient<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InviteCodes.
     * @param {InviteCodeDeleteManyArgs} args - Arguments to filter InviteCodes to delete.
     * @example
     * // Delete a few InviteCodes
     * const { count } = await prisma.inviteCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InviteCodeDeleteManyArgs>(args?: SelectSubset<T, InviteCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InviteCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InviteCodes
     * const inviteCode = await prisma.inviteCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InviteCodeUpdateManyArgs>(args: SelectSubset<T, InviteCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InviteCodes and returns the data updated in the database.
     * @param {InviteCodeUpdateManyAndReturnArgs} args - Arguments to update many InviteCodes.
     * @example
     * // Update many InviteCodes
     * const inviteCode = await prisma.inviteCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InviteCodes and only return the `code`
     * const inviteCodeWithCodeOnly = await prisma.inviteCode.updateManyAndReturn({
     *   select: { code: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InviteCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, InviteCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InviteCode.
     * @param {InviteCodeUpsertArgs} args - Arguments to update or create a InviteCode.
     * @example
     * // Update or create a InviteCode
     * const inviteCode = await prisma.inviteCode.upsert({
     *   create: {
     *     // ... data to create a InviteCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InviteCode we want to update
     *   }
     * })
     */
    upsert<T extends InviteCodeUpsertArgs>(args: SelectSubset<T, InviteCodeUpsertArgs<ExtArgs>>): Prisma__InviteCodeClient<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InviteCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCodeCountArgs} args - Arguments to filter InviteCodes to count.
     * @example
     * // Count the number of InviteCodes
     * const count = await prisma.inviteCode.count({
     *   where: {
     *     // ... the filter for the InviteCodes we want to count
     *   }
     * })
    **/
    count<T extends InviteCodeCountArgs>(
      args?: Subset<T, InviteCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InviteCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InviteCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InviteCodeAggregateArgs>(args: Subset<T, InviteCodeAggregateArgs>): Prisma.PrismaPromise<GetInviteCodeAggregateType<T>>

    /**
     * Group by InviteCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InviteCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InviteCodeGroupByArgs['orderBy'] }
        : { orderBy?: InviteCodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InviteCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInviteCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InviteCode model
   */
  readonly fields: InviteCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InviteCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InviteCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InviteCode model
   */
  interface InviteCodeFieldRefs {
    readonly code: FieldRef<"InviteCode", 'String'>
    readonly orgId: FieldRef<"InviteCode", 'String'>
    readonly createdBy: FieldRef<"InviteCode", 'String'>
    readonly expiresAt: FieldRef<"InviteCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InviteCode findUnique
   */
  export type InviteCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteCode
     */
    omit?: InviteCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteCodeInclude<ExtArgs> | null
    /**
     * Filter, which InviteCode to fetch.
     */
    where: InviteCodeWhereUniqueInput
  }

  /**
   * InviteCode findUniqueOrThrow
   */
  export type InviteCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteCode
     */
    omit?: InviteCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteCodeInclude<ExtArgs> | null
    /**
     * Filter, which InviteCode to fetch.
     */
    where: InviteCodeWhereUniqueInput
  }

  /**
   * InviteCode findFirst
   */
  export type InviteCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteCode
     */
    omit?: InviteCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteCodeInclude<ExtArgs> | null
    /**
     * Filter, which InviteCode to fetch.
     */
    where?: InviteCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InviteCodes to fetch.
     */
    orderBy?: InviteCodeOrderByWithRelationInput | InviteCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InviteCodes.
     */
    cursor?: InviteCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InviteCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InviteCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InviteCodes.
     */
    distinct?: InviteCodeScalarFieldEnum | InviteCodeScalarFieldEnum[]
  }

  /**
   * InviteCode findFirstOrThrow
   */
  export type InviteCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteCode
     */
    omit?: InviteCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteCodeInclude<ExtArgs> | null
    /**
     * Filter, which InviteCode to fetch.
     */
    where?: InviteCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InviteCodes to fetch.
     */
    orderBy?: InviteCodeOrderByWithRelationInput | InviteCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InviteCodes.
     */
    cursor?: InviteCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InviteCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InviteCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InviteCodes.
     */
    distinct?: InviteCodeScalarFieldEnum | InviteCodeScalarFieldEnum[]
  }

  /**
   * InviteCode findMany
   */
  export type InviteCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteCode
     */
    omit?: InviteCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteCodeInclude<ExtArgs> | null
    /**
     * Filter, which InviteCodes to fetch.
     */
    where?: InviteCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InviteCodes to fetch.
     */
    orderBy?: InviteCodeOrderByWithRelationInput | InviteCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InviteCodes.
     */
    cursor?: InviteCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InviteCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InviteCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InviteCodes.
     */
    distinct?: InviteCodeScalarFieldEnum | InviteCodeScalarFieldEnum[]
  }

  /**
   * InviteCode create
   */
  export type InviteCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteCode
     */
    omit?: InviteCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a InviteCode.
     */
    data: XOR<InviteCodeCreateInput, InviteCodeUncheckedCreateInput>
  }

  /**
   * InviteCode createMany
   */
  export type InviteCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InviteCodes.
     */
    data: InviteCodeCreateManyInput | InviteCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InviteCode createManyAndReturn
   */
  export type InviteCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InviteCode
     */
    omit?: InviteCodeOmit<ExtArgs> | null
    /**
     * The data used to create many InviteCodes.
     */
    data: InviteCodeCreateManyInput | InviteCodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteCodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InviteCode update
   */
  export type InviteCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteCode
     */
    omit?: InviteCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a InviteCode.
     */
    data: XOR<InviteCodeUpdateInput, InviteCodeUncheckedUpdateInput>
    /**
     * Choose, which InviteCode to update.
     */
    where: InviteCodeWhereUniqueInput
  }

  /**
   * InviteCode updateMany
   */
  export type InviteCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InviteCodes.
     */
    data: XOR<InviteCodeUpdateManyMutationInput, InviteCodeUncheckedUpdateManyInput>
    /**
     * Filter which InviteCodes to update
     */
    where?: InviteCodeWhereInput
    /**
     * Limit how many InviteCodes to update.
     */
    limit?: number
  }

  /**
   * InviteCode updateManyAndReturn
   */
  export type InviteCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InviteCode
     */
    omit?: InviteCodeOmit<ExtArgs> | null
    /**
     * The data used to update InviteCodes.
     */
    data: XOR<InviteCodeUpdateManyMutationInput, InviteCodeUncheckedUpdateManyInput>
    /**
     * Filter which InviteCodes to update
     */
    where?: InviteCodeWhereInput
    /**
     * Limit how many InviteCodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteCodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InviteCode upsert
   */
  export type InviteCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteCode
     */
    omit?: InviteCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the InviteCode to update in case it exists.
     */
    where: InviteCodeWhereUniqueInput
    /**
     * In case the InviteCode found by the `where` argument doesn't exist, create a new InviteCode with this data.
     */
    create: XOR<InviteCodeCreateInput, InviteCodeUncheckedCreateInput>
    /**
     * In case the InviteCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InviteCodeUpdateInput, InviteCodeUncheckedUpdateInput>
  }

  /**
   * InviteCode delete
   */
  export type InviteCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteCode
     */
    omit?: InviteCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteCodeInclude<ExtArgs> | null
    /**
     * Filter which InviteCode to delete.
     */
    where: InviteCodeWhereUniqueInput
  }

  /**
   * InviteCode deleteMany
   */
  export type InviteCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InviteCodes to delete
     */
    where?: InviteCodeWhereInput
    /**
     * Limit how many InviteCodes to delete.
     */
    limit?: number
  }

  /**
   * InviteCode without action
   */
  export type InviteCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteCode
     */
    omit?: InviteCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteCodeInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    action: $Enums.AuditAction | null
    target: $Enums.AuditTarget | null
    details: string | null
    date: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    action: $Enums.AuditAction | null
    target: $Enums.AuditTarget | null
    details: string | null
    date: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    clientId: number
    action: number
    target: number
    details: number
    date: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    clientId?: true
    action?: true
    target?: true
    details?: true
    date?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    clientId?: true
    action?: true
    target?: true
    details?: true
    date?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    clientId?: true
    action?: true
    target?: true
    details?: true
    date?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    clientId: string
    action: $Enums.AuditAction
    target: $Enums.AuditTarget
    details: string | null
    date: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    action?: boolean
    target?: boolean
    details?: boolean
    date?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    action?: boolean
    target?: boolean
    details?: boolean
    date?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    action?: boolean
    target?: boolean
    details?: boolean
    date?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    clientId?: boolean
    action?: boolean
    target?: boolean
    details?: boolean
    date?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "action" | "target" | "details" | "date", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      action: $Enums.AuditAction
      target: $Enums.AuditTarget
      details: string | null
      date: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly clientId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'AuditAction'>
    readonly target: FieldRef<"AuditLog", 'AuditTarget'>
    readonly details: FieldRef<"AuditLog", 'String'>
    readonly date: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Model AiUsage
   */

  export type AggregateAiUsage = {
    _count: AiUsageCountAggregateOutputType | null
    _min: AiUsageMinAggregateOutputType | null
    _max: AiUsageMaxAggregateOutputType | null
  }

  export type AiUsageMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    orgId: string | null
    date: Date | null
  }

  export type AiUsageMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    orgId: string | null
    date: Date | null
  }

  export type AiUsageCountAggregateOutputType = {
    id: number
    clientId: number
    orgId: number
    date: number
    _all: number
  }


  export type AiUsageMinAggregateInputType = {
    id?: true
    clientId?: true
    orgId?: true
    date?: true
  }

  export type AiUsageMaxAggregateInputType = {
    id?: true
    clientId?: true
    orgId?: true
    date?: true
  }

  export type AiUsageCountAggregateInputType = {
    id?: true
    clientId?: true
    orgId?: true
    date?: true
    _all?: true
  }

  export type AiUsageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiUsage to aggregate.
     */
    where?: AiUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiUsages to fetch.
     */
    orderBy?: AiUsageOrderByWithRelationInput | AiUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AiUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AiUsages
    **/
    _count?: true | AiUsageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AiUsageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AiUsageMaxAggregateInputType
  }

  export type GetAiUsageAggregateType<T extends AiUsageAggregateArgs> = {
        [P in keyof T & keyof AggregateAiUsage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAiUsage[P]>
      : GetScalarType<T[P], AggregateAiUsage[P]>
  }




  export type AiUsageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiUsageWhereInput
    orderBy?: AiUsageOrderByWithAggregationInput | AiUsageOrderByWithAggregationInput[]
    by: AiUsageScalarFieldEnum[] | AiUsageScalarFieldEnum
    having?: AiUsageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AiUsageCountAggregateInputType | true
    _min?: AiUsageMinAggregateInputType
    _max?: AiUsageMaxAggregateInputType
  }

  export type AiUsageGroupByOutputType = {
    id: string
    clientId: string
    orgId: string
    date: Date
    _count: AiUsageCountAggregateOutputType | null
    _min: AiUsageMinAggregateOutputType | null
    _max: AiUsageMaxAggregateOutputType | null
  }

  type GetAiUsageGroupByPayload<T extends AiUsageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AiUsageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AiUsageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AiUsageGroupByOutputType[P]>
            : GetScalarType<T[P], AiUsageGroupByOutputType[P]>
        }
      >
    >


  export type AiUsageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    orgId?: boolean
    date?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiUsage"]>

  export type AiUsageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    orgId?: boolean
    date?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiUsage"]>

  export type AiUsageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    orgId?: boolean
    date?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiUsage"]>

  export type AiUsageSelectScalar = {
    id?: boolean
    clientId?: boolean
    orgId?: boolean
    date?: boolean
  }

  export type AiUsageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "orgId" | "date", ExtArgs["result"]["aiUsage"]>
  export type AiUsageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type AiUsageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type AiUsageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $AiUsagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AiUsage"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      org: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      orgId: string
      date: Date
    }, ExtArgs["result"]["aiUsage"]>
    composites: {}
  }

  type AiUsageGetPayload<S extends boolean | null | undefined | AiUsageDefaultArgs> = $Result.GetResult<Prisma.$AiUsagePayload, S>

  type AiUsageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AiUsageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AiUsageCountAggregateInputType | true
    }

  export interface AiUsageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AiUsage'], meta: { name: 'AiUsage' } }
    /**
     * Find zero or one AiUsage that matches the filter.
     * @param {AiUsageFindUniqueArgs} args - Arguments to find a AiUsage
     * @example
     * // Get one AiUsage
     * const aiUsage = await prisma.aiUsage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AiUsageFindUniqueArgs>(args: SelectSubset<T, AiUsageFindUniqueArgs<ExtArgs>>): Prisma__AiUsageClient<$Result.GetResult<Prisma.$AiUsagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AiUsage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AiUsageFindUniqueOrThrowArgs} args - Arguments to find a AiUsage
     * @example
     * // Get one AiUsage
     * const aiUsage = await prisma.aiUsage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AiUsageFindUniqueOrThrowArgs>(args: SelectSubset<T, AiUsageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AiUsageClient<$Result.GetResult<Prisma.$AiUsagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiUsage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiUsageFindFirstArgs} args - Arguments to find a AiUsage
     * @example
     * // Get one AiUsage
     * const aiUsage = await prisma.aiUsage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AiUsageFindFirstArgs>(args?: SelectSubset<T, AiUsageFindFirstArgs<ExtArgs>>): Prisma__AiUsageClient<$Result.GetResult<Prisma.$AiUsagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiUsage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiUsageFindFirstOrThrowArgs} args - Arguments to find a AiUsage
     * @example
     * // Get one AiUsage
     * const aiUsage = await prisma.aiUsage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AiUsageFindFirstOrThrowArgs>(args?: SelectSubset<T, AiUsageFindFirstOrThrowArgs<ExtArgs>>): Prisma__AiUsageClient<$Result.GetResult<Prisma.$AiUsagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AiUsages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiUsageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AiUsages
     * const aiUsages = await prisma.aiUsage.findMany()
     * 
     * // Get first 10 AiUsages
     * const aiUsages = await prisma.aiUsage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aiUsageWithIdOnly = await prisma.aiUsage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AiUsageFindManyArgs>(args?: SelectSubset<T, AiUsageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AiUsage.
     * @param {AiUsageCreateArgs} args - Arguments to create a AiUsage.
     * @example
     * // Create one AiUsage
     * const AiUsage = await prisma.aiUsage.create({
     *   data: {
     *     // ... data to create a AiUsage
     *   }
     * })
     * 
     */
    create<T extends AiUsageCreateArgs>(args: SelectSubset<T, AiUsageCreateArgs<ExtArgs>>): Prisma__AiUsageClient<$Result.GetResult<Prisma.$AiUsagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AiUsages.
     * @param {AiUsageCreateManyArgs} args - Arguments to create many AiUsages.
     * @example
     * // Create many AiUsages
     * const aiUsage = await prisma.aiUsage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AiUsageCreateManyArgs>(args?: SelectSubset<T, AiUsageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AiUsages and returns the data saved in the database.
     * @param {AiUsageCreateManyAndReturnArgs} args - Arguments to create many AiUsages.
     * @example
     * // Create many AiUsages
     * const aiUsage = await prisma.aiUsage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AiUsages and only return the `id`
     * const aiUsageWithIdOnly = await prisma.aiUsage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AiUsageCreateManyAndReturnArgs>(args?: SelectSubset<T, AiUsageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiUsagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AiUsage.
     * @param {AiUsageDeleteArgs} args - Arguments to delete one AiUsage.
     * @example
     * // Delete one AiUsage
     * const AiUsage = await prisma.aiUsage.delete({
     *   where: {
     *     // ... filter to delete one AiUsage
     *   }
     * })
     * 
     */
    delete<T extends AiUsageDeleteArgs>(args: SelectSubset<T, AiUsageDeleteArgs<ExtArgs>>): Prisma__AiUsageClient<$Result.GetResult<Prisma.$AiUsagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AiUsage.
     * @param {AiUsageUpdateArgs} args - Arguments to update one AiUsage.
     * @example
     * // Update one AiUsage
     * const aiUsage = await prisma.aiUsage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AiUsageUpdateArgs>(args: SelectSubset<T, AiUsageUpdateArgs<ExtArgs>>): Prisma__AiUsageClient<$Result.GetResult<Prisma.$AiUsagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AiUsages.
     * @param {AiUsageDeleteManyArgs} args - Arguments to filter AiUsages to delete.
     * @example
     * // Delete a few AiUsages
     * const { count } = await prisma.aiUsage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AiUsageDeleteManyArgs>(args?: SelectSubset<T, AiUsageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiUsageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AiUsages
     * const aiUsage = await prisma.aiUsage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AiUsageUpdateManyArgs>(args: SelectSubset<T, AiUsageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiUsages and returns the data updated in the database.
     * @param {AiUsageUpdateManyAndReturnArgs} args - Arguments to update many AiUsages.
     * @example
     * // Update many AiUsages
     * const aiUsage = await prisma.aiUsage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AiUsages and only return the `id`
     * const aiUsageWithIdOnly = await prisma.aiUsage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AiUsageUpdateManyAndReturnArgs>(args: SelectSubset<T, AiUsageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiUsagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AiUsage.
     * @param {AiUsageUpsertArgs} args - Arguments to update or create a AiUsage.
     * @example
     * // Update or create a AiUsage
     * const aiUsage = await prisma.aiUsage.upsert({
     *   create: {
     *     // ... data to create a AiUsage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AiUsage we want to update
     *   }
     * })
     */
    upsert<T extends AiUsageUpsertArgs>(args: SelectSubset<T, AiUsageUpsertArgs<ExtArgs>>): Prisma__AiUsageClient<$Result.GetResult<Prisma.$AiUsagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AiUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiUsageCountArgs} args - Arguments to filter AiUsages to count.
     * @example
     * // Count the number of AiUsages
     * const count = await prisma.aiUsage.count({
     *   where: {
     *     // ... the filter for the AiUsages we want to count
     *   }
     * })
    **/
    count<T extends AiUsageCountArgs>(
      args?: Subset<T, AiUsageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AiUsageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AiUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiUsageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AiUsageAggregateArgs>(args: Subset<T, AiUsageAggregateArgs>): Prisma.PrismaPromise<GetAiUsageAggregateType<T>>

    /**
     * Group by AiUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiUsageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AiUsageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AiUsageGroupByArgs['orderBy'] }
        : { orderBy?: AiUsageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AiUsageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiUsageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AiUsage model
   */
  readonly fields: AiUsageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AiUsage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AiUsageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    org<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AiUsage model
   */
  interface AiUsageFieldRefs {
    readonly id: FieldRef<"AiUsage", 'String'>
    readonly clientId: FieldRef<"AiUsage", 'String'>
    readonly orgId: FieldRef<"AiUsage", 'String'>
    readonly date: FieldRef<"AiUsage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AiUsage findUnique
   */
  export type AiUsageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsage
     */
    select?: AiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiUsage
     */
    omit?: AiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiUsageInclude<ExtArgs> | null
    /**
     * Filter, which AiUsage to fetch.
     */
    where: AiUsageWhereUniqueInput
  }

  /**
   * AiUsage findUniqueOrThrow
   */
  export type AiUsageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsage
     */
    select?: AiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiUsage
     */
    omit?: AiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiUsageInclude<ExtArgs> | null
    /**
     * Filter, which AiUsage to fetch.
     */
    where: AiUsageWhereUniqueInput
  }

  /**
   * AiUsage findFirst
   */
  export type AiUsageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsage
     */
    select?: AiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiUsage
     */
    omit?: AiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiUsageInclude<ExtArgs> | null
    /**
     * Filter, which AiUsage to fetch.
     */
    where?: AiUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiUsages to fetch.
     */
    orderBy?: AiUsageOrderByWithRelationInput | AiUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiUsages.
     */
    cursor?: AiUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiUsages.
     */
    distinct?: AiUsageScalarFieldEnum | AiUsageScalarFieldEnum[]
  }

  /**
   * AiUsage findFirstOrThrow
   */
  export type AiUsageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsage
     */
    select?: AiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiUsage
     */
    omit?: AiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiUsageInclude<ExtArgs> | null
    /**
     * Filter, which AiUsage to fetch.
     */
    where?: AiUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiUsages to fetch.
     */
    orderBy?: AiUsageOrderByWithRelationInput | AiUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiUsages.
     */
    cursor?: AiUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiUsages.
     */
    distinct?: AiUsageScalarFieldEnum | AiUsageScalarFieldEnum[]
  }

  /**
   * AiUsage findMany
   */
  export type AiUsageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsage
     */
    select?: AiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiUsage
     */
    omit?: AiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiUsageInclude<ExtArgs> | null
    /**
     * Filter, which AiUsages to fetch.
     */
    where?: AiUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiUsages to fetch.
     */
    orderBy?: AiUsageOrderByWithRelationInput | AiUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AiUsages.
     */
    cursor?: AiUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiUsages.
     */
    distinct?: AiUsageScalarFieldEnum | AiUsageScalarFieldEnum[]
  }

  /**
   * AiUsage create
   */
  export type AiUsageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsage
     */
    select?: AiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiUsage
     */
    omit?: AiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiUsageInclude<ExtArgs> | null
    /**
     * The data needed to create a AiUsage.
     */
    data: XOR<AiUsageCreateInput, AiUsageUncheckedCreateInput>
  }

  /**
   * AiUsage createMany
   */
  export type AiUsageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AiUsages.
     */
    data: AiUsageCreateManyInput | AiUsageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AiUsage createManyAndReturn
   */
  export type AiUsageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsage
     */
    select?: AiUsageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiUsage
     */
    omit?: AiUsageOmit<ExtArgs> | null
    /**
     * The data used to create many AiUsages.
     */
    data: AiUsageCreateManyInput | AiUsageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiUsageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AiUsage update
   */
  export type AiUsageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsage
     */
    select?: AiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiUsage
     */
    omit?: AiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiUsageInclude<ExtArgs> | null
    /**
     * The data needed to update a AiUsage.
     */
    data: XOR<AiUsageUpdateInput, AiUsageUncheckedUpdateInput>
    /**
     * Choose, which AiUsage to update.
     */
    where: AiUsageWhereUniqueInput
  }

  /**
   * AiUsage updateMany
   */
  export type AiUsageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AiUsages.
     */
    data: XOR<AiUsageUpdateManyMutationInput, AiUsageUncheckedUpdateManyInput>
    /**
     * Filter which AiUsages to update
     */
    where?: AiUsageWhereInput
    /**
     * Limit how many AiUsages to update.
     */
    limit?: number
  }

  /**
   * AiUsage updateManyAndReturn
   */
  export type AiUsageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsage
     */
    select?: AiUsageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiUsage
     */
    omit?: AiUsageOmit<ExtArgs> | null
    /**
     * The data used to update AiUsages.
     */
    data: XOR<AiUsageUpdateManyMutationInput, AiUsageUncheckedUpdateManyInput>
    /**
     * Filter which AiUsages to update
     */
    where?: AiUsageWhereInput
    /**
     * Limit how many AiUsages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiUsageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AiUsage upsert
   */
  export type AiUsageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsage
     */
    select?: AiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiUsage
     */
    omit?: AiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiUsageInclude<ExtArgs> | null
    /**
     * The filter to search for the AiUsage to update in case it exists.
     */
    where: AiUsageWhereUniqueInput
    /**
     * In case the AiUsage found by the `where` argument doesn't exist, create a new AiUsage with this data.
     */
    create: XOR<AiUsageCreateInput, AiUsageUncheckedCreateInput>
    /**
     * In case the AiUsage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AiUsageUpdateInput, AiUsageUncheckedUpdateInput>
  }

  /**
   * AiUsage delete
   */
  export type AiUsageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsage
     */
    select?: AiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiUsage
     */
    omit?: AiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiUsageInclude<ExtArgs> | null
    /**
     * Filter which AiUsage to delete.
     */
    where: AiUsageWhereUniqueInput
  }

  /**
   * AiUsage deleteMany
   */
  export type AiUsageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiUsages to delete
     */
    where?: AiUsageWhereInput
    /**
     * Limit how many AiUsages to delete.
     */
    limit?: number
  }

  /**
   * AiUsage without action
   */
  export type AiUsageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsage
     */
    select?: AiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiUsage
     */
    omit?: AiUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiUsageInclude<ExtArgs> | null
  }


  /**
   * Model MarketinAIUsage
   */

  export type AggregateMarketinAIUsage = {
    _count: MarketinAIUsageCountAggregateOutputType | null
    _min: MarketinAIUsageMinAggregateOutputType | null
    _max: MarketinAIUsageMaxAggregateOutputType | null
  }

  export type MarketinAIUsageMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    orgId: string | null
    date: Date | null
  }

  export type MarketinAIUsageMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    orgId: string | null
    date: Date | null
  }

  export type MarketinAIUsageCountAggregateOutputType = {
    id: number
    clientId: number
    orgId: number
    date: number
    _all: number
  }


  export type MarketinAIUsageMinAggregateInputType = {
    id?: true
    clientId?: true
    orgId?: true
    date?: true
  }

  export type MarketinAIUsageMaxAggregateInputType = {
    id?: true
    clientId?: true
    orgId?: true
    date?: true
  }

  export type MarketinAIUsageCountAggregateInputType = {
    id?: true
    clientId?: true
    orgId?: true
    date?: true
    _all?: true
  }

  export type MarketinAIUsageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketinAIUsage to aggregate.
     */
    where?: MarketinAIUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketinAIUsages to fetch.
     */
    orderBy?: MarketinAIUsageOrderByWithRelationInput | MarketinAIUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarketinAIUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketinAIUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketinAIUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MarketinAIUsages
    **/
    _count?: true | MarketinAIUsageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarketinAIUsageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarketinAIUsageMaxAggregateInputType
  }

  export type GetMarketinAIUsageAggregateType<T extends MarketinAIUsageAggregateArgs> = {
        [P in keyof T & keyof AggregateMarketinAIUsage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarketinAIUsage[P]>
      : GetScalarType<T[P], AggregateMarketinAIUsage[P]>
  }




  export type MarketinAIUsageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketinAIUsageWhereInput
    orderBy?: MarketinAIUsageOrderByWithAggregationInput | MarketinAIUsageOrderByWithAggregationInput[]
    by: MarketinAIUsageScalarFieldEnum[] | MarketinAIUsageScalarFieldEnum
    having?: MarketinAIUsageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarketinAIUsageCountAggregateInputType | true
    _min?: MarketinAIUsageMinAggregateInputType
    _max?: MarketinAIUsageMaxAggregateInputType
  }

  export type MarketinAIUsageGroupByOutputType = {
    id: string
    clientId: string
    orgId: string
    date: Date
    _count: MarketinAIUsageCountAggregateOutputType | null
    _min: MarketinAIUsageMinAggregateOutputType | null
    _max: MarketinAIUsageMaxAggregateOutputType | null
  }

  type GetMarketinAIUsageGroupByPayload<T extends MarketinAIUsageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarketinAIUsageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarketinAIUsageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarketinAIUsageGroupByOutputType[P]>
            : GetScalarType<T[P], MarketinAIUsageGroupByOutputType[P]>
        }
      >
    >


  export type MarketinAIUsageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    orgId?: boolean
    date?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marketinAIUsage"]>

  export type MarketinAIUsageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    orgId?: boolean
    date?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marketinAIUsage"]>

  export type MarketinAIUsageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    orgId?: boolean
    date?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marketinAIUsage"]>

  export type MarketinAIUsageSelectScalar = {
    id?: boolean
    clientId?: boolean
    orgId?: boolean
    date?: boolean
  }

  export type MarketinAIUsageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "orgId" | "date", ExtArgs["result"]["marketinAIUsage"]>
  export type MarketinAIUsageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type MarketinAIUsageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type MarketinAIUsageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $MarketinAIUsagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MarketinAIUsage"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      org: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      orgId: string
      date: Date
    }, ExtArgs["result"]["marketinAIUsage"]>
    composites: {}
  }

  type MarketinAIUsageGetPayload<S extends boolean | null | undefined | MarketinAIUsageDefaultArgs> = $Result.GetResult<Prisma.$MarketinAIUsagePayload, S>

  type MarketinAIUsageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarketinAIUsageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarketinAIUsageCountAggregateInputType | true
    }

  export interface MarketinAIUsageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MarketinAIUsage'], meta: { name: 'MarketinAIUsage' } }
    /**
     * Find zero or one MarketinAIUsage that matches the filter.
     * @param {MarketinAIUsageFindUniqueArgs} args - Arguments to find a MarketinAIUsage
     * @example
     * // Get one MarketinAIUsage
     * const marketinAIUsage = await prisma.marketinAIUsage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarketinAIUsageFindUniqueArgs>(args: SelectSubset<T, MarketinAIUsageFindUniqueArgs<ExtArgs>>): Prisma__MarketinAIUsageClient<$Result.GetResult<Prisma.$MarketinAIUsagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MarketinAIUsage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarketinAIUsageFindUniqueOrThrowArgs} args - Arguments to find a MarketinAIUsage
     * @example
     * // Get one MarketinAIUsage
     * const marketinAIUsage = await prisma.marketinAIUsage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarketinAIUsageFindUniqueOrThrowArgs>(args: SelectSubset<T, MarketinAIUsageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarketinAIUsageClient<$Result.GetResult<Prisma.$MarketinAIUsagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarketinAIUsage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketinAIUsageFindFirstArgs} args - Arguments to find a MarketinAIUsage
     * @example
     * // Get one MarketinAIUsage
     * const marketinAIUsage = await prisma.marketinAIUsage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarketinAIUsageFindFirstArgs>(args?: SelectSubset<T, MarketinAIUsageFindFirstArgs<ExtArgs>>): Prisma__MarketinAIUsageClient<$Result.GetResult<Prisma.$MarketinAIUsagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarketinAIUsage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketinAIUsageFindFirstOrThrowArgs} args - Arguments to find a MarketinAIUsage
     * @example
     * // Get one MarketinAIUsage
     * const marketinAIUsage = await prisma.marketinAIUsage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarketinAIUsageFindFirstOrThrowArgs>(args?: SelectSubset<T, MarketinAIUsageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarketinAIUsageClient<$Result.GetResult<Prisma.$MarketinAIUsagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MarketinAIUsages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketinAIUsageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MarketinAIUsages
     * const marketinAIUsages = await prisma.marketinAIUsage.findMany()
     * 
     * // Get first 10 MarketinAIUsages
     * const marketinAIUsages = await prisma.marketinAIUsage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marketinAIUsageWithIdOnly = await prisma.marketinAIUsage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarketinAIUsageFindManyArgs>(args?: SelectSubset<T, MarketinAIUsageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketinAIUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MarketinAIUsage.
     * @param {MarketinAIUsageCreateArgs} args - Arguments to create a MarketinAIUsage.
     * @example
     * // Create one MarketinAIUsage
     * const MarketinAIUsage = await prisma.marketinAIUsage.create({
     *   data: {
     *     // ... data to create a MarketinAIUsage
     *   }
     * })
     * 
     */
    create<T extends MarketinAIUsageCreateArgs>(args: SelectSubset<T, MarketinAIUsageCreateArgs<ExtArgs>>): Prisma__MarketinAIUsageClient<$Result.GetResult<Prisma.$MarketinAIUsagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MarketinAIUsages.
     * @param {MarketinAIUsageCreateManyArgs} args - Arguments to create many MarketinAIUsages.
     * @example
     * // Create many MarketinAIUsages
     * const marketinAIUsage = await prisma.marketinAIUsage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarketinAIUsageCreateManyArgs>(args?: SelectSubset<T, MarketinAIUsageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MarketinAIUsages and returns the data saved in the database.
     * @param {MarketinAIUsageCreateManyAndReturnArgs} args - Arguments to create many MarketinAIUsages.
     * @example
     * // Create many MarketinAIUsages
     * const marketinAIUsage = await prisma.marketinAIUsage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MarketinAIUsages and only return the `id`
     * const marketinAIUsageWithIdOnly = await prisma.marketinAIUsage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarketinAIUsageCreateManyAndReturnArgs>(args?: SelectSubset<T, MarketinAIUsageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketinAIUsagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MarketinAIUsage.
     * @param {MarketinAIUsageDeleteArgs} args - Arguments to delete one MarketinAIUsage.
     * @example
     * // Delete one MarketinAIUsage
     * const MarketinAIUsage = await prisma.marketinAIUsage.delete({
     *   where: {
     *     // ... filter to delete one MarketinAIUsage
     *   }
     * })
     * 
     */
    delete<T extends MarketinAIUsageDeleteArgs>(args: SelectSubset<T, MarketinAIUsageDeleteArgs<ExtArgs>>): Prisma__MarketinAIUsageClient<$Result.GetResult<Prisma.$MarketinAIUsagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MarketinAIUsage.
     * @param {MarketinAIUsageUpdateArgs} args - Arguments to update one MarketinAIUsage.
     * @example
     * // Update one MarketinAIUsage
     * const marketinAIUsage = await prisma.marketinAIUsage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarketinAIUsageUpdateArgs>(args: SelectSubset<T, MarketinAIUsageUpdateArgs<ExtArgs>>): Prisma__MarketinAIUsageClient<$Result.GetResult<Prisma.$MarketinAIUsagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MarketinAIUsages.
     * @param {MarketinAIUsageDeleteManyArgs} args - Arguments to filter MarketinAIUsages to delete.
     * @example
     * // Delete a few MarketinAIUsages
     * const { count } = await prisma.marketinAIUsage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarketinAIUsageDeleteManyArgs>(args?: SelectSubset<T, MarketinAIUsageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketinAIUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketinAIUsageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MarketinAIUsages
     * const marketinAIUsage = await prisma.marketinAIUsage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarketinAIUsageUpdateManyArgs>(args: SelectSubset<T, MarketinAIUsageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketinAIUsages and returns the data updated in the database.
     * @param {MarketinAIUsageUpdateManyAndReturnArgs} args - Arguments to update many MarketinAIUsages.
     * @example
     * // Update many MarketinAIUsages
     * const marketinAIUsage = await prisma.marketinAIUsage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MarketinAIUsages and only return the `id`
     * const marketinAIUsageWithIdOnly = await prisma.marketinAIUsage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MarketinAIUsageUpdateManyAndReturnArgs>(args: SelectSubset<T, MarketinAIUsageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketinAIUsagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MarketinAIUsage.
     * @param {MarketinAIUsageUpsertArgs} args - Arguments to update or create a MarketinAIUsage.
     * @example
     * // Update or create a MarketinAIUsage
     * const marketinAIUsage = await prisma.marketinAIUsage.upsert({
     *   create: {
     *     // ... data to create a MarketinAIUsage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MarketinAIUsage we want to update
     *   }
     * })
     */
    upsert<T extends MarketinAIUsageUpsertArgs>(args: SelectSubset<T, MarketinAIUsageUpsertArgs<ExtArgs>>): Prisma__MarketinAIUsageClient<$Result.GetResult<Prisma.$MarketinAIUsagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MarketinAIUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketinAIUsageCountArgs} args - Arguments to filter MarketinAIUsages to count.
     * @example
     * // Count the number of MarketinAIUsages
     * const count = await prisma.marketinAIUsage.count({
     *   where: {
     *     // ... the filter for the MarketinAIUsages we want to count
     *   }
     * })
    **/
    count<T extends MarketinAIUsageCountArgs>(
      args?: Subset<T, MarketinAIUsageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarketinAIUsageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MarketinAIUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketinAIUsageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MarketinAIUsageAggregateArgs>(args: Subset<T, MarketinAIUsageAggregateArgs>): Prisma.PrismaPromise<GetMarketinAIUsageAggregateType<T>>

    /**
     * Group by MarketinAIUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketinAIUsageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MarketinAIUsageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarketinAIUsageGroupByArgs['orderBy'] }
        : { orderBy?: MarketinAIUsageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MarketinAIUsageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketinAIUsageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MarketinAIUsage model
   */
  readonly fields: MarketinAIUsageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MarketinAIUsage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarketinAIUsageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    org<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MarketinAIUsage model
   */
  interface MarketinAIUsageFieldRefs {
    readonly id: FieldRef<"MarketinAIUsage", 'String'>
    readonly clientId: FieldRef<"MarketinAIUsage", 'String'>
    readonly orgId: FieldRef<"MarketinAIUsage", 'String'>
    readonly date: FieldRef<"MarketinAIUsage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MarketinAIUsage findUnique
   */
  export type MarketinAIUsageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketinAIUsage
     */
    select?: MarketinAIUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketinAIUsage
     */
    omit?: MarketinAIUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketinAIUsageInclude<ExtArgs> | null
    /**
     * Filter, which MarketinAIUsage to fetch.
     */
    where: MarketinAIUsageWhereUniqueInput
  }

  /**
   * MarketinAIUsage findUniqueOrThrow
   */
  export type MarketinAIUsageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketinAIUsage
     */
    select?: MarketinAIUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketinAIUsage
     */
    omit?: MarketinAIUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketinAIUsageInclude<ExtArgs> | null
    /**
     * Filter, which MarketinAIUsage to fetch.
     */
    where: MarketinAIUsageWhereUniqueInput
  }

  /**
   * MarketinAIUsage findFirst
   */
  export type MarketinAIUsageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketinAIUsage
     */
    select?: MarketinAIUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketinAIUsage
     */
    omit?: MarketinAIUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketinAIUsageInclude<ExtArgs> | null
    /**
     * Filter, which MarketinAIUsage to fetch.
     */
    where?: MarketinAIUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketinAIUsages to fetch.
     */
    orderBy?: MarketinAIUsageOrderByWithRelationInput | MarketinAIUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketinAIUsages.
     */
    cursor?: MarketinAIUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketinAIUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketinAIUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketinAIUsages.
     */
    distinct?: MarketinAIUsageScalarFieldEnum | MarketinAIUsageScalarFieldEnum[]
  }

  /**
   * MarketinAIUsage findFirstOrThrow
   */
  export type MarketinAIUsageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketinAIUsage
     */
    select?: MarketinAIUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketinAIUsage
     */
    omit?: MarketinAIUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketinAIUsageInclude<ExtArgs> | null
    /**
     * Filter, which MarketinAIUsage to fetch.
     */
    where?: MarketinAIUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketinAIUsages to fetch.
     */
    orderBy?: MarketinAIUsageOrderByWithRelationInput | MarketinAIUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketinAIUsages.
     */
    cursor?: MarketinAIUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketinAIUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketinAIUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketinAIUsages.
     */
    distinct?: MarketinAIUsageScalarFieldEnum | MarketinAIUsageScalarFieldEnum[]
  }

  /**
   * MarketinAIUsage findMany
   */
  export type MarketinAIUsageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketinAIUsage
     */
    select?: MarketinAIUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketinAIUsage
     */
    omit?: MarketinAIUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketinAIUsageInclude<ExtArgs> | null
    /**
     * Filter, which MarketinAIUsages to fetch.
     */
    where?: MarketinAIUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketinAIUsages to fetch.
     */
    orderBy?: MarketinAIUsageOrderByWithRelationInput | MarketinAIUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MarketinAIUsages.
     */
    cursor?: MarketinAIUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketinAIUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketinAIUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketinAIUsages.
     */
    distinct?: MarketinAIUsageScalarFieldEnum | MarketinAIUsageScalarFieldEnum[]
  }

  /**
   * MarketinAIUsage create
   */
  export type MarketinAIUsageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketinAIUsage
     */
    select?: MarketinAIUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketinAIUsage
     */
    omit?: MarketinAIUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketinAIUsageInclude<ExtArgs> | null
    /**
     * The data needed to create a MarketinAIUsage.
     */
    data: XOR<MarketinAIUsageCreateInput, MarketinAIUsageUncheckedCreateInput>
  }

  /**
   * MarketinAIUsage createMany
   */
  export type MarketinAIUsageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MarketinAIUsages.
     */
    data: MarketinAIUsageCreateManyInput | MarketinAIUsageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarketinAIUsage createManyAndReturn
   */
  export type MarketinAIUsageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketinAIUsage
     */
    select?: MarketinAIUsageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarketinAIUsage
     */
    omit?: MarketinAIUsageOmit<ExtArgs> | null
    /**
     * The data used to create many MarketinAIUsages.
     */
    data: MarketinAIUsageCreateManyInput | MarketinAIUsageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketinAIUsageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MarketinAIUsage update
   */
  export type MarketinAIUsageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketinAIUsage
     */
    select?: MarketinAIUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketinAIUsage
     */
    omit?: MarketinAIUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketinAIUsageInclude<ExtArgs> | null
    /**
     * The data needed to update a MarketinAIUsage.
     */
    data: XOR<MarketinAIUsageUpdateInput, MarketinAIUsageUncheckedUpdateInput>
    /**
     * Choose, which MarketinAIUsage to update.
     */
    where: MarketinAIUsageWhereUniqueInput
  }

  /**
   * MarketinAIUsage updateMany
   */
  export type MarketinAIUsageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MarketinAIUsages.
     */
    data: XOR<MarketinAIUsageUpdateManyMutationInput, MarketinAIUsageUncheckedUpdateManyInput>
    /**
     * Filter which MarketinAIUsages to update
     */
    where?: MarketinAIUsageWhereInput
    /**
     * Limit how many MarketinAIUsages to update.
     */
    limit?: number
  }

  /**
   * MarketinAIUsage updateManyAndReturn
   */
  export type MarketinAIUsageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketinAIUsage
     */
    select?: MarketinAIUsageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarketinAIUsage
     */
    omit?: MarketinAIUsageOmit<ExtArgs> | null
    /**
     * The data used to update MarketinAIUsages.
     */
    data: XOR<MarketinAIUsageUpdateManyMutationInput, MarketinAIUsageUncheckedUpdateManyInput>
    /**
     * Filter which MarketinAIUsages to update
     */
    where?: MarketinAIUsageWhereInput
    /**
     * Limit how many MarketinAIUsages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketinAIUsageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MarketinAIUsage upsert
   */
  export type MarketinAIUsageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketinAIUsage
     */
    select?: MarketinAIUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketinAIUsage
     */
    omit?: MarketinAIUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketinAIUsageInclude<ExtArgs> | null
    /**
     * The filter to search for the MarketinAIUsage to update in case it exists.
     */
    where: MarketinAIUsageWhereUniqueInput
    /**
     * In case the MarketinAIUsage found by the `where` argument doesn't exist, create a new MarketinAIUsage with this data.
     */
    create: XOR<MarketinAIUsageCreateInput, MarketinAIUsageUncheckedCreateInput>
    /**
     * In case the MarketinAIUsage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarketinAIUsageUpdateInput, MarketinAIUsageUncheckedUpdateInput>
  }

  /**
   * MarketinAIUsage delete
   */
  export type MarketinAIUsageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketinAIUsage
     */
    select?: MarketinAIUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketinAIUsage
     */
    omit?: MarketinAIUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketinAIUsageInclude<ExtArgs> | null
    /**
     * Filter which MarketinAIUsage to delete.
     */
    where: MarketinAIUsageWhereUniqueInput
  }

  /**
   * MarketinAIUsage deleteMany
   */
  export type MarketinAIUsageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketinAIUsages to delete
     */
    where?: MarketinAIUsageWhereInput
    /**
     * Limit how many MarketinAIUsages to delete.
     */
    limit?: number
  }

  /**
   * MarketinAIUsage without action
   */
  export type MarketinAIUsageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketinAIUsage
     */
    select?: MarketinAIUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketinAIUsage
     */
    omit?: MarketinAIUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketinAIUsageInclude<ExtArgs> | null
  }


  /**
   * Model Sales
   */

  export type AggregateSales = {
    _count: SalesCountAggregateOutputType | null
    _min: SalesMinAggregateOutputType | null
    _max: SalesMaxAggregateOutputType | null
  }

  export type SalesMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    date: Date | null
    product: $Enums.Subscription | null
  }

  export type SalesMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    date: Date | null
    product: $Enums.Subscription | null
  }

  export type SalesCountAggregateOutputType = {
    id: number
    orgId: number
    date: number
    product: number
    _all: number
  }


  export type SalesMinAggregateInputType = {
    id?: true
    orgId?: true
    date?: true
    product?: true
  }

  export type SalesMaxAggregateInputType = {
    id?: true
    orgId?: true
    date?: true
    product?: true
  }

  export type SalesCountAggregateInputType = {
    id?: true
    orgId?: true
    date?: true
    product?: true
    _all?: true
  }

  export type SalesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sales to aggregate.
     */
    where?: SalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sales
    **/
    _count?: true | SalesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesMaxAggregateInputType
  }

  export type GetSalesAggregateType<T extends SalesAggregateArgs> = {
        [P in keyof T & keyof AggregateSales]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSales[P]>
      : GetScalarType<T[P], AggregateSales[P]>
  }




  export type SalesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesWhereInput
    orderBy?: SalesOrderByWithAggregationInput | SalesOrderByWithAggregationInput[]
    by: SalesScalarFieldEnum[] | SalesScalarFieldEnum
    having?: SalesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesCountAggregateInputType | true
    _min?: SalesMinAggregateInputType
    _max?: SalesMaxAggregateInputType
  }

  export type SalesGroupByOutputType = {
    id: string
    orgId: string
    date: Date
    product: $Enums.Subscription
    _count: SalesCountAggregateOutputType | null
    _min: SalesMinAggregateOutputType | null
    _max: SalesMaxAggregateOutputType | null
  }

  type GetSalesGroupByPayload<T extends SalesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesGroupByOutputType[P]>
            : GetScalarType<T[P], SalesGroupByOutputType[P]>
        }
      >
    >


  export type SalesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    date?: boolean
    product?: boolean
    buyer?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sales"]>

  export type SalesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    date?: boolean
    product?: boolean
    buyer?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sales"]>

  export type SalesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    date?: boolean
    product?: boolean
    buyer?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sales"]>

  export type SalesSelectScalar = {
    id?: boolean
    orgId?: boolean
    date?: boolean
    product?: boolean
  }

  export type SalesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "date" | "product", ExtArgs["result"]["sales"]>
  export type SalesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyer?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type SalesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyer?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type SalesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyer?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $SalesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sales"
    objects: {
      buyer: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      date: Date
      product: $Enums.Subscription
    }, ExtArgs["result"]["sales"]>
    composites: {}
  }

  type SalesGetPayload<S extends boolean | null | undefined | SalesDefaultArgs> = $Result.GetResult<Prisma.$SalesPayload, S>

  type SalesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalesCountAggregateInputType | true
    }

  export interface SalesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sales'], meta: { name: 'Sales' } }
    /**
     * Find zero or one Sales that matches the filter.
     * @param {SalesFindUniqueArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalesFindUniqueArgs>(args: SelectSubset<T, SalesFindUniqueArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sales that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalesFindUniqueOrThrowArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalesFindUniqueOrThrowArgs>(args: SelectSubset<T, SalesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesFindFirstArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalesFindFirstArgs>(args?: SelectSubset<T, SalesFindFirstArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sales that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesFindFirstOrThrowArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalesFindFirstOrThrowArgs>(args?: SelectSubset<T, SalesFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales
     * const sales = await prisma.sales.findMany()
     * 
     * // Get first 10 Sales
     * const sales = await prisma.sales.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salesWithIdOnly = await prisma.sales.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalesFindManyArgs>(args?: SelectSubset<T, SalesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sales.
     * @param {SalesCreateArgs} args - Arguments to create a Sales.
     * @example
     * // Create one Sales
     * const Sales = await prisma.sales.create({
     *   data: {
     *     // ... data to create a Sales
     *   }
     * })
     * 
     */
    create<T extends SalesCreateArgs>(args: SelectSubset<T, SalesCreateArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sales.
     * @param {SalesCreateManyArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sales = await prisma.sales.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalesCreateManyArgs>(args?: SelectSubset<T, SalesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sales and returns the data saved in the database.
     * @param {SalesCreateManyAndReturnArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sales = await prisma.sales.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sales and only return the `id`
     * const salesWithIdOnly = await prisma.sales.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalesCreateManyAndReturnArgs>(args?: SelectSubset<T, SalesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sales.
     * @param {SalesDeleteArgs} args - Arguments to delete one Sales.
     * @example
     * // Delete one Sales
     * const Sales = await prisma.sales.delete({
     *   where: {
     *     // ... filter to delete one Sales
     *   }
     * })
     * 
     */
    delete<T extends SalesDeleteArgs>(args: SelectSubset<T, SalesDeleteArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sales.
     * @param {SalesUpdateArgs} args - Arguments to update one Sales.
     * @example
     * // Update one Sales
     * const sales = await prisma.sales.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalesUpdateArgs>(args: SelectSubset<T, SalesUpdateArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sales.
     * @param {SalesDeleteManyArgs} args - Arguments to filter Sales to delete.
     * @example
     * // Delete a few Sales
     * const { count } = await prisma.sales.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalesDeleteManyArgs>(args?: SelectSubset<T, SalesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales
     * const sales = await prisma.sales.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalesUpdateManyArgs>(args: SelectSubset<T, SalesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales and returns the data updated in the database.
     * @param {SalesUpdateManyAndReturnArgs} args - Arguments to update many Sales.
     * @example
     * // Update many Sales
     * const sales = await prisma.sales.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sales and only return the `id`
     * const salesWithIdOnly = await prisma.sales.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SalesUpdateManyAndReturnArgs>(args: SelectSubset<T, SalesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sales.
     * @param {SalesUpsertArgs} args - Arguments to update or create a Sales.
     * @example
     * // Update or create a Sales
     * const sales = await prisma.sales.upsert({
     *   create: {
     *     // ... data to create a Sales
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sales we want to update
     *   }
     * })
     */
    upsert<T extends SalesUpsertArgs>(args: SelectSubset<T, SalesUpsertArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesCountArgs} args - Arguments to filter Sales to count.
     * @example
     * // Count the number of Sales
     * const count = await prisma.sales.count({
     *   where: {
     *     // ... the filter for the Sales we want to count
     *   }
     * })
    **/
    count<T extends SalesCountArgs>(
      args?: Subset<T, SalesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SalesAggregateArgs>(args: Subset<T, SalesAggregateArgs>): Prisma.PrismaPromise<GetSalesAggregateType<T>>

    /**
     * Group by Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SalesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalesGroupByArgs['orderBy'] }
        : { orderBy?: SalesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SalesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sales model
   */
  readonly fields: SalesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sales.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    buyer<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sales model
   */
  interface SalesFieldRefs {
    readonly id: FieldRef<"Sales", 'String'>
    readonly orgId: FieldRef<"Sales", 'String'>
    readonly date: FieldRef<"Sales", 'DateTime'>
    readonly product: FieldRef<"Sales", 'Subscription'>
  }
    

  // Custom InputTypes
  /**
   * Sales findUnique
   */
  export type SalesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where: SalesWhereUniqueInput
  }

  /**
   * Sales findUniqueOrThrow
   */
  export type SalesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where: SalesWhereUniqueInput
  }

  /**
   * Sales findFirst
   */
  export type SalesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * Sales findFirstOrThrow
   */
  export type SalesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * Sales findMany
   */
  export type SalesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sales.
     */
    cursor?: SalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * Sales create
   */
  export type SalesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * The data needed to create a Sales.
     */
    data: XOR<SalesCreateInput, SalesUncheckedCreateInput>
  }

  /**
   * Sales createMany
   */
  export type SalesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sales.
     */
    data: SalesCreateManyInput | SalesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sales createManyAndReturn
   */
  export type SalesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * The data used to create many Sales.
     */
    data: SalesCreateManyInput | SalesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sales update
   */
  export type SalesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * The data needed to update a Sales.
     */
    data: XOR<SalesUpdateInput, SalesUncheckedUpdateInput>
    /**
     * Choose, which Sales to update.
     */
    where: SalesWhereUniqueInput
  }

  /**
   * Sales updateMany
   */
  export type SalesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sales.
     */
    data: XOR<SalesUpdateManyMutationInput, SalesUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SalesWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
  }

  /**
   * Sales updateManyAndReturn
   */
  export type SalesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * The data used to update Sales.
     */
    data: XOR<SalesUpdateManyMutationInput, SalesUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SalesWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sales upsert
   */
  export type SalesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * The filter to search for the Sales to update in case it exists.
     */
    where: SalesWhereUniqueInput
    /**
     * In case the Sales found by the `where` argument doesn't exist, create a new Sales with this data.
     */
    create: XOR<SalesCreateInput, SalesUncheckedCreateInput>
    /**
     * In case the Sales was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalesUpdateInput, SalesUncheckedUpdateInput>
  }

  /**
   * Sales delete
   */
  export type SalesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter which Sales to delete.
     */
    where: SalesWhereUniqueInput
  }

  /**
   * Sales deleteMany
   */
  export type SalesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sales to delete
     */
    where?: SalesWhereInput
    /**
     * Limit how many Sales to delete.
     */
    limit?: number
  }

  /**
   * Sales without action
   */
  export type SalesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    industry: 'industry',
    patronage: 'patronage',
    createdAt: 'createdAt',
    address: 'address',
    description: 'description',
    emailAddress: 'emailAddress',
    phoneNumber: 'phoneNumber',
    stripeCustomerId: 'stripeCustomerId',
    stripeSubscriptionId: 'stripeSubscriptionId',
    facebookPageId: 'facebookPageId',
    facebookAccessToken: 'facebookAccessToken'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const MarketingStrategyScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    productName: 'productName',
    description: 'description',
    targetAudience: 'targetAudience',
    advice: 'advice',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type MarketingStrategyScalarFieldEnum = (typeof MarketingStrategyScalarFieldEnum)[keyof typeof MarketingStrategyScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    role: 'role',
    email: 'email',
    firstname: 'firstname',
    lastname: 'lastname',
    profilePic: 'profilePic',
    createdAt: 'createdAt',
    lastSeenAt: 'lastSeenAt',
    personalEmail: 'personalEmail',
    phoneNumber: 'phoneNumber'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const FinanceScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    month: 'month',
    balance: 'balance',
    revenue: 'revenue',
    expense: 'expense',
    netProfit: 'netProfit',
    margin: 'margin'
  };

  export type FinanceScalarFieldEnum = (typeof FinanceScalarFieldEnum)[keyof typeof FinanceScalarFieldEnum]


  export const FinanceAnalysisScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    summary: 'summary',
    categories: 'categories',
    monthly: 'monthly',
    tips: 'tips',
    createdAt: 'createdAt'
  };

  export type FinanceAnalysisScalarFieldEnum = (typeof FinanceAnalysisScalarFieldEnum)[keyof typeof FinanceAnalysisScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    title: 'title',
    content: 'content',
    platform: 'platform',
    reach: 'reach',
    publishedAt: 'publishedAt',
    published: 'published',
    images: 'images'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const AdministratorScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    password: 'password',
    createdAt: 'createdAt',
    lastAccessTime: 'lastAccessTime'
  };

  export type AdministratorScalarFieldEnum = (typeof AdministratorScalarFieldEnum)[keyof typeof AdministratorScalarFieldEnum]


  export const InviteCodeScalarFieldEnum: {
    code: 'code',
    orgId: 'orgId',
    createdBy: 'createdBy',
    expiresAt: 'expiresAt'
  };

  export type InviteCodeScalarFieldEnum = (typeof InviteCodeScalarFieldEnum)[keyof typeof InviteCodeScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    action: 'action',
    target: 'target',
    details: 'details',
    date: 'date'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const AiUsageScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    orgId: 'orgId',
    date: 'date'
  };

  export type AiUsageScalarFieldEnum = (typeof AiUsageScalarFieldEnum)[keyof typeof AiUsageScalarFieldEnum]


  export const MarketinAIUsageScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    orgId: 'orgId',
    date: 'date'
  };

  export type MarketinAIUsageScalarFieldEnum = (typeof MarketinAIUsageScalarFieldEnum)[keyof typeof MarketinAIUsageScalarFieldEnum]


  export const SalesScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    date: 'date',
    product: 'product'
  };

  export type SalesScalarFieldEnum = (typeof SalesScalarFieldEnum)[keyof typeof SalesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Industry'
   */
  export type EnumIndustryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Industry'>
    


  /**
   * Reference to a field of type 'Industry[]'
   */
  export type ListEnumIndustryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Industry[]'>
    


  /**
   * Reference to a field of type 'Subscription'
   */
  export type EnumSubscriptionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Subscription'>
    


  /**
   * Reference to a field of type 'Subscription[]'
   */
  export type ListEnumSubscriptionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Subscription[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'MemberAccessType'
   */
  export type EnumMemberAccessTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MemberAccessType'>
    


  /**
   * Reference to a field of type 'MemberAccessType[]'
   */
  export type ListEnumMemberAccessTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MemberAccessType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AuditAction'
   */
  export type EnumAuditActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuditAction'>
    


  /**
   * Reference to a field of type 'AuditAction[]'
   */
  export type ListEnumAuditActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuditAction[]'>
    


  /**
   * Reference to a field of type 'AuditTarget'
   */
  export type EnumAuditTargetFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuditTarget'>
    


  /**
   * Reference to a field of type 'AuditTarget[]'
   */
  export type ListEnumAuditTargetFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuditTarget[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    industry?: EnumIndustryFilter<"Organization"> | $Enums.Industry
    patronage?: EnumSubscriptionFilter<"Organization"> | $Enums.Subscription
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    address?: StringFilter<"Organization"> | string
    description?: StringFilter<"Organization"> | string
    emailAddress?: StringFilter<"Organization"> | string
    phoneNumber?: StringFilter<"Organization"> | string
    stripeCustomerId?: StringNullableFilter<"Organization"> | string | null
    stripeSubscriptionId?: StringNullableFilter<"Organization"> | string | null
    facebookPageId?: StringNullableFilter<"Organization"> | string | null
    facebookAccessToken?: StringNullableFilter<"Organization"> | string | null
    members?: ClientListRelationFilter
    financeData?: FinanceListRelationFilter
    financeAnalyses?: FinanceAnalysisListRelationFilter
    InviteCode?: InviteCodeListRelationFilter
    marketinAIUsages?: MarketinAIUsageListRelationFilter
    marketingStrategy?: XOR<MarketingStrategyNullableScalarRelationFilter, MarketingStrategyWhereInput> | null
    posts?: PostListRelationFilter
    sales?: SalesListRelationFilter
    aiUsages?: AiUsageListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    industry?: SortOrder
    patronage?: SortOrder
    createdAt?: SortOrder
    address?: SortOrder
    description?: SortOrder
    emailAddress?: SortOrder
    phoneNumber?: SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    stripeSubscriptionId?: SortOrderInput | SortOrder
    facebookPageId?: SortOrderInput | SortOrder
    facebookAccessToken?: SortOrderInput | SortOrder
    members?: ClientOrderByRelationAggregateInput
    financeData?: FinanceOrderByRelationAggregateInput
    financeAnalyses?: FinanceAnalysisOrderByRelationAggregateInput
    InviteCode?: InviteCodeOrderByRelationAggregateInput
    marketinAIUsages?: MarketinAIUsageOrderByRelationAggregateInput
    marketingStrategy?: MarketingStrategyOrderByWithRelationInput
    posts?: PostOrderByRelationAggregateInput
    sales?: SalesOrderByRelationAggregateInput
    aiUsages?: AiUsageOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    name?: StringFilter<"Organization"> | string
    industry?: EnumIndustryFilter<"Organization"> | $Enums.Industry
    patronage?: EnumSubscriptionFilter<"Organization"> | $Enums.Subscription
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    address?: StringFilter<"Organization"> | string
    description?: StringFilter<"Organization"> | string
    emailAddress?: StringFilter<"Organization"> | string
    phoneNumber?: StringFilter<"Organization"> | string
    stripeCustomerId?: StringNullableFilter<"Organization"> | string | null
    stripeSubscriptionId?: StringNullableFilter<"Organization"> | string | null
    facebookPageId?: StringNullableFilter<"Organization"> | string | null
    facebookAccessToken?: StringNullableFilter<"Organization"> | string | null
    members?: ClientListRelationFilter
    financeData?: FinanceListRelationFilter
    financeAnalyses?: FinanceAnalysisListRelationFilter
    InviteCode?: InviteCodeListRelationFilter
    marketinAIUsages?: MarketinAIUsageListRelationFilter
    marketingStrategy?: XOR<MarketingStrategyNullableScalarRelationFilter, MarketingStrategyWhereInput> | null
    posts?: PostListRelationFilter
    sales?: SalesListRelationFilter
    aiUsages?: AiUsageListRelationFilter
  }, "id" | "id">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    industry?: SortOrder
    patronage?: SortOrder
    createdAt?: SortOrder
    address?: SortOrder
    description?: SortOrder
    emailAddress?: SortOrder
    phoneNumber?: SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    stripeSubscriptionId?: SortOrderInput | SortOrder
    facebookPageId?: SortOrderInput | SortOrder
    facebookAccessToken?: SortOrderInput | SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organization"> | string
    name?: StringWithAggregatesFilter<"Organization"> | string
    industry?: EnumIndustryWithAggregatesFilter<"Organization"> | $Enums.Industry
    patronage?: EnumSubscriptionWithAggregatesFilter<"Organization"> | $Enums.Subscription
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    address?: StringWithAggregatesFilter<"Organization"> | string
    description?: StringWithAggregatesFilter<"Organization"> | string
    emailAddress?: StringWithAggregatesFilter<"Organization"> | string
    phoneNumber?: StringWithAggregatesFilter<"Organization"> | string
    stripeCustomerId?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    stripeSubscriptionId?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    facebookPageId?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    facebookAccessToken?: StringNullableWithAggregatesFilter<"Organization"> | string | null
  }

  export type MarketingStrategyWhereInput = {
    AND?: MarketingStrategyWhereInput | MarketingStrategyWhereInput[]
    OR?: MarketingStrategyWhereInput[]
    NOT?: MarketingStrategyWhereInput | MarketingStrategyWhereInput[]
    id?: StringFilter<"MarketingStrategy"> | string
    orgId?: StringFilter<"MarketingStrategy"> | string
    productName?: StringFilter<"MarketingStrategy"> | string
    description?: StringFilter<"MarketingStrategy"> | string
    targetAudience?: StringFilter<"MarketingStrategy"> | string
    advice?: StringNullableFilter<"MarketingStrategy"> | string | null
    updatedAt?: DateTimeFilter<"MarketingStrategy"> | Date | string
    createdAt?: DateTimeFilter<"MarketingStrategy"> | Date | string
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type MarketingStrategyOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    productName?: SortOrder
    description?: SortOrder
    targetAudience?: SortOrder
    advice?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    org?: OrganizationOrderByWithRelationInput
  }

  export type MarketingStrategyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orgId?: string
    AND?: MarketingStrategyWhereInput | MarketingStrategyWhereInput[]
    OR?: MarketingStrategyWhereInput[]
    NOT?: MarketingStrategyWhereInput | MarketingStrategyWhereInput[]
    productName?: StringFilter<"MarketingStrategy"> | string
    description?: StringFilter<"MarketingStrategy"> | string
    targetAudience?: StringFilter<"MarketingStrategy"> | string
    advice?: StringNullableFilter<"MarketingStrategy"> | string | null
    updatedAt?: DateTimeFilter<"MarketingStrategy"> | Date | string
    createdAt?: DateTimeFilter<"MarketingStrategy"> | Date | string
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "id" | "orgId">

  export type MarketingStrategyOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    productName?: SortOrder
    description?: SortOrder
    targetAudience?: SortOrder
    advice?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: MarketingStrategyCountOrderByAggregateInput
    _max?: MarketingStrategyMaxOrderByAggregateInput
    _min?: MarketingStrategyMinOrderByAggregateInput
  }

  export type MarketingStrategyScalarWhereWithAggregatesInput = {
    AND?: MarketingStrategyScalarWhereWithAggregatesInput | MarketingStrategyScalarWhereWithAggregatesInput[]
    OR?: MarketingStrategyScalarWhereWithAggregatesInput[]
    NOT?: MarketingStrategyScalarWhereWithAggregatesInput | MarketingStrategyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MarketingStrategy"> | string
    orgId?: StringWithAggregatesFilter<"MarketingStrategy"> | string
    productName?: StringWithAggregatesFilter<"MarketingStrategy"> | string
    description?: StringWithAggregatesFilter<"MarketingStrategy"> | string
    targetAudience?: StringWithAggregatesFilter<"MarketingStrategy"> | string
    advice?: StringNullableWithAggregatesFilter<"MarketingStrategy"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"MarketingStrategy"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"MarketingStrategy"> | Date | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    orgId?: StringNullableFilter<"Client"> | string | null
    role?: EnumMemberAccessTypeFilter<"Client"> | $Enums.MemberAccessType
    email?: StringFilter<"Client"> | string
    firstname?: StringFilter<"Client"> | string
    lastname?: StringFilter<"Client"> | string
    profilePic?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeFilter<"Client"> | Date | string
    lastSeenAt?: DateTimeFilter<"Client"> | Date | string
    personalEmail?: StringNullableFilter<"Client"> | string | null
    phoneNumber?: StringNullableFilter<"Client"> | string | null
    aiUsages?: AiUsageListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    ofOrg?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    marketinAIUsages?: MarketinAIUsageListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrderInput | SortOrder
    role?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    profilePic?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lastSeenAt?: SortOrder
    personalEmail?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    aiUsages?: AiUsageOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
    ofOrg?: OrganizationOrderByWithRelationInput
    marketinAIUsages?: MarketinAIUsageOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    orgId?: StringNullableFilter<"Client"> | string | null
    role?: EnumMemberAccessTypeFilter<"Client"> | $Enums.MemberAccessType
    email?: StringFilter<"Client"> | string
    firstname?: StringFilter<"Client"> | string
    lastname?: StringFilter<"Client"> | string
    profilePic?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeFilter<"Client"> | Date | string
    lastSeenAt?: DateTimeFilter<"Client"> | Date | string
    personalEmail?: StringNullableFilter<"Client"> | string | null
    phoneNumber?: StringNullableFilter<"Client"> | string | null
    aiUsages?: AiUsageListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    ofOrg?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    marketinAIUsages?: MarketinAIUsageListRelationFilter
  }, "id" | "id">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrderInput | SortOrder
    role?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    profilePic?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lastSeenAt?: SortOrder
    personalEmail?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    orgId?: StringNullableWithAggregatesFilter<"Client"> | string | null
    role?: EnumMemberAccessTypeWithAggregatesFilter<"Client"> | $Enums.MemberAccessType
    email?: StringWithAggregatesFilter<"Client"> | string
    firstname?: StringWithAggregatesFilter<"Client"> | string
    lastname?: StringWithAggregatesFilter<"Client"> | string
    profilePic?: StringNullableWithAggregatesFilter<"Client"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    lastSeenAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    personalEmail?: StringNullableWithAggregatesFilter<"Client"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"Client"> | string | null
  }

  export type FinanceWhereInput = {
    AND?: FinanceWhereInput | FinanceWhereInput[]
    OR?: FinanceWhereInput[]
    NOT?: FinanceWhereInput | FinanceWhereInput[]
    id?: StringFilter<"Finance"> | string
    orgId?: StringFilter<"Finance"> | string
    month?: DateTimeNullableFilter<"Finance"> | Date | string | null
    balance?: IntNullableFilter<"Finance"> | number | null
    revenue?: IntNullableFilter<"Finance"> | number | null
    expense?: IntNullableFilter<"Finance"> | number | null
    netProfit?: IntNullableFilter<"Finance"> | number | null
    margin?: IntNullableFilter<"Finance"> | number | null
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type FinanceOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    month?: SortOrderInput | SortOrder
    balance?: SortOrderInput | SortOrder
    revenue?: SortOrderInput | SortOrder
    expense?: SortOrderInput | SortOrder
    netProfit?: SortOrderInput | SortOrder
    margin?: SortOrderInput | SortOrder
    org?: OrganizationOrderByWithRelationInput
  }

  export type FinanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FinanceWhereInput | FinanceWhereInput[]
    OR?: FinanceWhereInput[]
    NOT?: FinanceWhereInput | FinanceWhereInput[]
    orgId?: StringFilter<"Finance"> | string
    month?: DateTimeNullableFilter<"Finance"> | Date | string | null
    balance?: IntNullableFilter<"Finance"> | number | null
    revenue?: IntNullableFilter<"Finance"> | number | null
    expense?: IntNullableFilter<"Finance"> | number | null
    netProfit?: IntNullableFilter<"Finance"> | number | null
    margin?: IntNullableFilter<"Finance"> | number | null
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "id">

  export type FinanceOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    month?: SortOrderInput | SortOrder
    balance?: SortOrderInput | SortOrder
    revenue?: SortOrderInput | SortOrder
    expense?: SortOrderInput | SortOrder
    netProfit?: SortOrderInput | SortOrder
    margin?: SortOrderInput | SortOrder
    _count?: FinanceCountOrderByAggregateInput
    _avg?: FinanceAvgOrderByAggregateInput
    _max?: FinanceMaxOrderByAggregateInput
    _min?: FinanceMinOrderByAggregateInput
    _sum?: FinanceSumOrderByAggregateInput
  }

  export type FinanceScalarWhereWithAggregatesInput = {
    AND?: FinanceScalarWhereWithAggregatesInput | FinanceScalarWhereWithAggregatesInput[]
    OR?: FinanceScalarWhereWithAggregatesInput[]
    NOT?: FinanceScalarWhereWithAggregatesInput | FinanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Finance"> | string
    orgId?: StringWithAggregatesFilter<"Finance"> | string
    month?: DateTimeNullableWithAggregatesFilter<"Finance"> | Date | string | null
    balance?: IntNullableWithAggregatesFilter<"Finance"> | number | null
    revenue?: IntNullableWithAggregatesFilter<"Finance"> | number | null
    expense?: IntNullableWithAggregatesFilter<"Finance"> | number | null
    netProfit?: IntNullableWithAggregatesFilter<"Finance"> | number | null
    margin?: IntNullableWithAggregatesFilter<"Finance"> | number | null
  }

  export type FinanceAnalysisWhereInput = {
    AND?: FinanceAnalysisWhereInput | FinanceAnalysisWhereInput[]
    OR?: FinanceAnalysisWhereInput[]
    NOT?: FinanceAnalysisWhereInput | FinanceAnalysisWhereInput[]
    id?: StringFilter<"FinanceAnalysis"> | string
    orgId?: StringFilter<"FinanceAnalysis"> | string
    summary?: StringFilter<"FinanceAnalysis"> | string
    categories?: JsonFilter<"FinanceAnalysis">
    monthly?: JsonNullableFilter<"FinanceAnalysis">
    tips?: JsonFilter<"FinanceAnalysis">
    createdAt?: DateTimeFilter<"FinanceAnalysis"> | Date | string
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type FinanceAnalysisOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    summary?: SortOrder
    categories?: SortOrder
    monthly?: SortOrderInput | SortOrder
    tips?: SortOrder
    createdAt?: SortOrder
    org?: OrganizationOrderByWithRelationInput
  }

  export type FinanceAnalysisWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FinanceAnalysisWhereInput | FinanceAnalysisWhereInput[]
    OR?: FinanceAnalysisWhereInput[]
    NOT?: FinanceAnalysisWhereInput | FinanceAnalysisWhereInput[]
    orgId?: StringFilter<"FinanceAnalysis"> | string
    summary?: StringFilter<"FinanceAnalysis"> | string
    categories?: JsonFilter<"FinanceAnalysis">
    monthly?: JsonNullableFilter<"FinanceAnalysis">
    tips?: JsonFilter<"FinanceAnalysis">
    createdAt?: DateTimeFilter<"FinanceAnalysis"> | Date | string
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "id">

  export type FinanceAnalysisOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    summary?: SortOrder
    categories?: SortOrder
    monthly?: SortOrderInput | SortOrder
    tips?: SortOrder
    createdAt?: SortOrder
    _count?: FinanceAnalysisCountOrderByAggregateInput
    _max?: FinanceAnalysisMaxOrderByAggregateInput
    _min?: FinanceAnalysisMinOrderByAggregateInput
  }

  export type FinanceAnalysisScalarWhereWithAggregatesInput = {
    AND?: FinanceAnalysisScalarWhereWithAggregatesInput | FinanceAnalysisScalarWhereWithAggregatesInput[]
    OR?: FinanceAnalysisScalarWhereWithAggregatesInput[]
    NOT?: FinanceAnalysisScalarWhereWithAggregatesInput | FinanceAnalysisScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FinanceAnalysis"> | string
    orgId?: StringWithAggregatesFilter<"FinanceAnalysis"> | string
    summary?: StringWithAggregatesFilter<"FinanceAnalysis"> | string
    categories?: JsonWithAggregatesFilter<"FinanceAnalysis">
    monthly?: JsonNullableWithAggregatesFilter<"FinanceAnalysis">
    tips?: JsonWithAggregatesFilter<"FinanceAnalysis">
    createdAt?: DateTimeWithAggregatesFilter<"FinanceAnalysis"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    orgId?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    platform?: StringFilter<"Post"> | string
    reach?: IntFilter<"Post"> | number
    publishedAt?: DateTimeFilter<"Post"> | Date | string
    published?: BoolFilter<"Post"> | boolean
    images?: JsonFilter<"Post">
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    platform?: SortOrder
    reach?: SortOrder
    publishedAt?: SortOrder
    published?: SortOrder
    images?: SortOrder
    org?: OrganizationOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    orgId?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    platform?: StringFilter<"Post"> | string
    reach?: IntFilter<"Post"> | number
    publishedAt?: DateTimeFilter<"Post"> | Date | string
    published?: BoolFilter<"Post"> | boolean
    images?: JsonFilter<"Post">
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    platform?: SortOrder
    reach?: SortOrder
    publishedAt?: SortOrder
    published?: SortOrder
    images?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    orgId?: StringWithAggregatesFilter<"Post"> | string
    title?: StringWithAggregatesFilter<"Post"> | string
    content?: StringWithAggregatesFilter<"Post"> | string
    platform?: StringWithAggregatesFilter<"Post"> | string
    reach?: IntWithAggregatesFilter<"Post"> | number
    publishedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    published?: BoolWithAggregatesFilter<"Post"> | boolean
    images?: JsonWithAggregatesFilter<"Post">
  }

  export type AdministratorWhereInput = {
    AND?: AdministratorWhereInput | AdministratorWhereInput[]
    OR?: AdministratorWhereInput[]
    NOT?: AdministratorWhereInput | AdministratorWhereInput[]
    id?: StringFilter<"Administrator"> | string
    email?: StringFilter<"Administrator"> | string
    username?: StringFilter<"Administrator"> | string
    password?: StringFilter<"Administrator"> | string
    createdAt?: DateTimeFilter<"Administrator"> | Date | string
    lastAccessTime?: DateTimeFilter<"Administrator"> | Date | string
  }

  export type AdministratorOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    lastAccessTime?: SortOrder
  }

  export type AdministratorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: AdministratorWhereInput | AdministratorWhereInput[]
    OR?: AdministratorWhereInput[]
    NOT?: AdministratorWhereInput | AdministratorWhereInput[]
    email?: StringFilter<"Administrator"> | string
    password?: StringFilter<"Administrator"> | string
    createdAt?: DateTimeFilter<"Administrator"> | Date | string
    lastAccessTime?: DateTimeFilter<"Administrator"> | Date | string
  }, "id" | "id" | "username">

  export type AdministratorOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    lastAccessTime?: SortOrder
    _count?: AdministratorCountOrderByAggregateInput
    _max?: AdministratorMaxOrderByAggregateInput
    _min?: AdministratorMinOrderByAggregateInput
  }

  export type AdministratorScalarWhereWithAggregatesInput = {
    AND?: AdministratorScalarWhereWithAggregatesInput | AdministratorScalarWhereWithAggregatesInput[]
    OR?: AdministratorScalarWhereWithAggregatesInput[]
    NOT?: AdministratorScalarWhereWithAggregatesInput | AdministratorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Administrator"> | string
    email?: StringWithAggregatesFilter<"Administrator"> | string
    username?: StringWithAggregatesFilter<"Administrator"> | string
    password?: StringWithAggregatesFilter<"Administrator"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Administrator"> | Date | string
    lastAccessTime?: DateTimeWithAggregatesFilter<"Administrator"> | Date | string
  }

  export type InviteCodeWhereInput = {
    AND?: InviteCodeWhereInput | InviteCodeWhereInput[]
    OR?: InviteCodeWhereInput[]
    NOT?: InviteCodeWhereInput | InviteCodeWhereInput[]
    code?: StringFilter<"InviteCode"> | string
    orgId?: StringFilter<"InviteCode"> | string
    createdBy?: StringFilter<"InviteCode"> | string
    expiresAt?: DateTimeFilter<"InviteCode"> | Date | string
    Organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type InviteCodeOrderByWithRelationInput = {
    code?: SortOrder
    orgId?: SortOrder
    createdBy?: SortOrder
    expiresAt?: SortOrder
    Organization?: OrganizationOrderByWithRelationInput
  }

  export type InviteCodeWhereUniqueInput = Prisma.AtLeast<{
    code?: string
    AND?: InviteCodeWhereInput | InviteCodeWhereInput[]
    OR?: InviteCodeWhereInput[]
    NOT?: InviteCodeWhereInput | InviteCodeWhereInput[]
    orgId?: StringFilter<"InviteCode"> | string
    createdBy?: StringFilter<"InviteCode"> | string
    expiresAt?: DateTimeFilter<"InviteCode"> | Date | string
    Organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "code">

  export type InviteCodeOrderByWithAggregationInput = {
    code?: SortOrder
    orgId?: SortOrder
    createdBy?: SortOrder
    expiresAt?: SortOrder
    _count?: InviteCodeCountOrderByAggregateInput
    _max?: InviteCodeMaxOrderByAggregateInput
    _min?: InviteCodeMinOrderByAggregateInput
  }

  export type InviteCodeScalarWhereWithAggregatesInput = {
    AND?: InviteCodeScalarWhereWithAggregatesInput | InviteCodeScalarWhereWithAggregatesInput[]
    OR?: InviteCodeScalarWhereWithAggregatesInput[]
    NOT?: InviteCodeScalarWhereWithAggregatesInput | InviteCodeScalarWhereWithAggregatesInput[]
    code?: StringWithAggregatesFilter<"InviteCode"> | string
    orgId?: StringWithAggregatesFilter<"InviteCode"> | string
    createdBy?: StringWithAggregatesFilter<"InviteCode"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"InviteCode"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    clientId?: StringFilter<"AuditLog"> | string
    action?: EnumAuditActionFilter<"AuditLog"> | $Enums.AuditAction
    target?: EnumAuditTargetFilter<"AuditLog"> | $Enums.AuditTarget
    details?: StringNullableFilter<"AuditLog"> | string | null
    date?: DateTimeFilter<"AuditLog"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    action?: SortOrder
    target?: SortOrder
    details?: SortOrderInput | SortOrder
    date?: SortOrder
    client?: ClientOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    clientId?: StringFilter<"AuditLog"> | string
    action?: EnumAuditActionFilter<"AuditLog"> | $Enums.AuditAction
    target?: EnumAuditTargetFilter<"AuditLog"> | $Enums.AuditTarget
    details?: StringNullableFilter<"AuditLog"> | string | null
    date?: DateTimeFilter<"AuditLog"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    action?: SortOrder
    target?: SortOrder
    details?: SortOrderInput | SortOrder
    date?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    clientId?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: EnumAuditActionWithAggregatesFilter<"AuditLog"> | $Enums.AuditAction
    target?: EnumAuditTargetWithAggregatesFilter<"AuditLog"> | $Enums.AuditTarget
    details?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    date?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type AiUsageWhereInput = {
    AND?: AiUsageWhereInput | AiUsageWhereInput[]
    OR?: AiUsageWhereInput[]
    NOT?: AiUsageWhereInput | AiUsageWhereInput[]
    id?: StringFilter<"AiUsage"> | string
    clientId?: StringFilter<"AiUsage"> | string
    orgId?: StringFilter<"AiUsage"> | string
    date?: DateTimeFilter<"AiUsage"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type AiUsageOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    orgId?: SortOrder
    date?: SortOrder
    client?: ClientOrderByWithRelationInput
    org?: OrganizationOrderByWithRelationInput
  }

  export type AiUsageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AiUsageWhereInput | AiUsageWhereInput[]
    OR?: AiUsageWhereInput[]
    NOT?: AiUsageWhereInput | AiUsageWhereInput[]
    clientId?: StringFilter<"AiUsage"> | string
    orgId?: StringFilter<"AiUsage"> | string
    date?: DateTimeFilter<"AiUsage"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "id">

  export type AiUsageOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    orgId?: SortOrder
    date?: SortOrder
    _count?: AiUsageCountOrderByAggregateInput
    _max?: AiUsageMaxOrderByAggregateInput
    _min?: AiUsageMinOrderByAggregateInput
  }

  export type AiUsageScalarWhereWithAggregatesInput = {
    AND?: AiUsageScalarWhereWithAggregatesInput | AiUsageScalarWhereWithAggregatesInput[]
    OR?: AiUsageScalarWhereWithAggregatesInput[]
    NOT?: AiUsageScalarWhereWithAggregatesInput | AiUsageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AiUsage"> | string
    clientId?: StringWithAggregatesFilter<"AiUsage"> | string
    orgId?: StringWithAggregatesFilter<"AiUsage"> | string
    date?: DateTimeWithAggregatesFilter<"AiUsage"> | Date | string
  }

  export type MarketinAIUsageWhereInput = {
    AND?: MarketinAIUsageWhereInput | MarketinAIUsageWhereInput[]
    OR?: MarketinAIUsageWhereInput[]
    NOT?: MarketinAIUsageWhereInput | MarketinAIUsageWhereInput[]
    id?: StringFilter<"MarketinAIUsage"> | string
    clientId?: StringFilter<"MarketinAIUsage"> | string
    orgId?: StringFilter<"MarketinAIUsage"> | string
    date?: DateTimeFilter<"MarketinAIUsage"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type MarketinAIUsageOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    orgId?: SortOrder
    date?: SortOrder
    client?: ClientOrderByWithRelationInput
    org?: OrganizationOrderByWithRelationInput
  }

  export type MarketinAIUsageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MarketinAIUsageWhereInput | MarketinAIUsageWhereInput[]
    OR?: MarketinAIUsageWhereInput[]
    NOT?: MarketinAIUsageWhereInput | MarketinAIUsageWhereInput[]
    clientId?: StringFilter<"MarketinAIUsage"> | string
    orgId?: StringFilter<"MarketinAIUsage"> | string
    date?: DateTimeFilter<"MarketinAIUsage"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "id">

  export type MarketinAIUsageOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    orgId?: SortOrder
    date?: SortOrder
    _count?: MarketinAIUsageCountOrderByAggregateInput
    _max?: MarketinAIUsageMaxOrderByAggregateInput
    _min?: MarketinAIUsageMinOrderByAggregateInput
  }

  export type MarketinAIUsageScalarWhereWithAggregatesInput = {
    AND?: MarketinAIUsageScalarWhereWithAggregatesInput | MarketinAIUsageScalarWhereWithAggregatesInput[]
    OR?: MarketinAIUsageScalarWhereWithAggregatesInput[]
    NOT?: MarketinAIUsageScalarWhereWithAggregatesInput | MarketinAIUsageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MarketinAIUsage"> | string
    clientId?: StringWithAggregatesFilter<"MarketinAIUsage"> | string
    orgId?: StringWithAggregatesFilter<"MarketinAIUsage"> | string
    date?: DateTimeWithAggregatesFilter<"MarketinAIUsage"> | Date | string
  }

  export type SalesWhereInput = {
    AND?: SalesWhereInput | SalesWhereInput[]
    OR?: SalesWhereInput[]
    NOT?: SalesWhereInput | SalesWhereInput[]
    id?: StringFilter<"Sales"> | string
    orgId?: StringFilter<"Sales"> | string
    date?: DateTimeFilter<"Sales"> | Date | string
    product?: EnumSubscriptionFilter<"Sales"> | $Enums.Subscription
    buyer?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type SalesOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    date?: SortOrder
    product?: SortOrder
    buyer?: OrganizationOrderByWithRelationInput
  }

  export type SalesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SalesWhereInput | SalesWhereInput[]
    OR?: SalesWhereInput[]
    NOT?: SalesWhereInput | SalesWhereInput[]
    orgId?: StringFilter<"Sales"> | string
    date?: DateTimeFilter<"Sales"> | Date | string
    product?: EnumSubscriptionFilter<"Sales"> | $Enums.Subscription
    buyer?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "id">

  export type SalesOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    date?: SortOrder
    product?: SortOrder
    _count?: SalesCountOrderByAggregateInput
    _max?: SalesMaxOrderByAggregateInput
    _min?: SalesMinOrderByAggregateInput
  }

  export type SalesScalarWhereWithAggregatesInput = {
    AND?: SalesScalarWhereWithAggregatesInput | SalesScalarWhereWithAggregatesInput[]
    OR?: SalesScalarWhereWithAggregatesInput[]
    NOT?: SalesScalarWhereWithAggregatesInput | SalesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sales"> | string
    orgId?: StringWithAggregatesFilter<"Sales"> | string
    date?: DateTimeWithAggregatesFilter<"Sales"> | Date | string
    product?: EnumSubscriptionWithAggregatesFilter<"Sales"> | $Enums.Subscription
  }

  export type OrganizationCreateInput = {
    id: string
    name?: string
    industry: $Enums.Industry
    patronage: $Enums.Subscription
    createdAt?: Date | string
    address: string
    description: string
    emailAddress: string
    phoneNumber: string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    facebookPageId?: string | null
    facebookAccessToken?: string | null
    members?: ClientCreateNestedManyWithoutOfOrgInput
    financeData?: FinanceCreateNestedManyWithoutOrgInput
    financeAnalyses?: FinanceAnalysisCreateNestedManyWithoutOrgInput
    InviteCode?: InviteCodeCreateNestedManyWithoutOrganizationInput
    marketinAIUsages?: MarketinAIUsageCreateNestedManyWithoutOrgInput
    marketingStrategy?: MarketingStrategyCreateNestedOneWithoutOrgInput
    posts?: PostCreateNestedManyWithoutOrgInput
    sales?: SalesCreateNestedManyWithoutBuyerInput
    aiUsages?: AiUsageCreateNestedManyWithoutOrgInput
  }

  export type OrganizationUncheckedCreateInput = {
    id: string
    name?: string
    industry: $Enums.Industry
    patronage: $Enums.Subscription
    createdAt?: Date | string
    address: string
    description: string
    emailAddress: string
    phoneNumber: string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    facebookPageId?: string | null
    facebookAccessToken?: string | null
    members?: ClientUncheckedCreateNestedManyWithoutOfOrgInput
    financeData?: FinanceUncheckedCreateNestedManyWithoutOrgInput
    financeAnalyses?: FinanceAnalysisUncheckedCreateNestedManyWithoutOrgInput
    InviteCode?: InviteCodeUncheckedCreateNestedManyWithoutOrganizationInput
    marketinAIUsages?: MarketinAIUsageUncheckedCreateNestedManyWithoutOrgInput
    marketingStrategy?: MarketingStrategyUncheckedCreateNestedOneWithoutOrgInput
    posts?: PostUncheckedCreateNestedManyWithoutOrgInput
    sales?: SalesUncheckedCreateNestedManyWithoutBuyerInput
    aiUsages?: AiUsageUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    industry?: EnumIndustryFieldUpdateOperationsInput | $Enums.Industry
    patronage?: EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPageId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    members?: ClientUpdateManyWithoutOfOrgNestedInput
    financeData?: FinanceUpdateManyWithoutOrgNestedInput
    financeAnalyses?: FinanceAnalysisUpdateManyWithoutOrgNestedInput
    InviteCode?: InviteCodeUpdateManyWithoutOrganizationNestedInput
    marketinAIUsages?: MarketinAIUsageUpdateManyWithoutOrgNestedInput
    marketingStrategy?: MarketingStrategyUpdateOneWithoutOrgNestedInput
    posts?: PostUpdateManyWithoutOrgNestedInput
    sales?: SalesUpdateManyWithoutBuyerNestedInput
    aiUsages?: AiUsageUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    industry?: EnumIndustryFieldUpdateOperationsInput | $Enums.Industry
    patronage?: EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPageId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    members?: ClientUncheckedUpdateManyWithoutOfOrgNestedInput
    financeData?: FinanceUncheckedUpdateManyWithoutOrgNestedInput
    financeAnalyses?: FinanceAnalysisUncheckedUpdateManyWithoutOrgNestedInput
    InviteCode?: InviteCodeUncheckedUpdateManyWithoutOrganizationNestedInput
    marketinAIUsages?: MarketinAIUsageUncheckedUpdateManyWithoutOrgNestedInput
    marketingStrategy?: MarketingStrategyUncheckedUpdateOneWithoutOrgNestedInput
    posts?: PostUncheckedUpdateManyWithoutOrgNestedInput
    sales?: SalesUncheckedUpdateManyWithoutBuyerNestedInput
    aiUsages?: AiUsageUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationCreateManyInput = {
    id: string
    name?: string
    industry: $Enums.Industry
    patronage: $Enums.Subscription
    createdAt?: Date | string
    address: string
    description: string
    emailAddress: string
    phoneNumber: string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    facebookPageId?: string | null
    facebookAccessToken?: string | null
  }

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    industry?: EnumIndustryFieldUpdateOperationsInput | $Enums.Industry
    patronage?: EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPageId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    industry?: EnumIndustryFieldUpdateOperationsInput | $Enums.Industry
    patronage?: EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPageId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MarketingStrategyCreateInput = {
    id?: string
    productName: string
    description: string
    targetAudience: string
    advice?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    org: OrganizationCreateNestedOneWithoutMarketingStrategyInput
  }

  export type MarketingStrategyUncheckedCreateInput = {
    id?: string
    orgId: string
    productName: string
    description: string
    targetAudience: string
    advice?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type MarketingStrategyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    advice?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationUpdateOneRequiredWithoutMarketingStrategyNestedInput
  }

  export type MarketingStrategyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    advice?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketingStrategyCreateManyInput = {
    id?: string
    orgId: string
    productName: string
    description: string
    targetAudience: string
    advice?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type MarketingStrategyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    advice?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketingStrategyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    advice?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateInput = {
    id: string
    role: $Enums.MemberAccessType
    email: string
    firstname: string
    lastname: string
    profilePic?: string | null
    createdAt?: Date | string
    lastSeenAt?: Date | string
    personalEmail?: string | null
    phoneNumber?: string | null
    aiUsages?: AiUsageCreateNestedManyWithoutClientInput
    auditLogs?: AuditLogCreateNestedManyWithoutClientInput
    ofOrg?: OrganizationCreateNestedOneWithoutMembersInput
    marketinAIUsages?: MarketinAIUsageCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id: string
    orgId?: string | null
    role: $Enums.MemberAccessType
    email: string
    firstname: string
    lastname: string
    profilePic?: string | null
    createdAt?: Date | string
    lastSeenAt?: Date | string
    personalEmail?: string | null
    phoneNumber?: string | null
    aiUsages?: AiUsageUncheckedCreateNestedManyWithoutClientInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutClientInput
    marketinAIUsages?: MarketinAIUsageUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberAccessTypeFieldUpdateOperationsInput | $Enums.MemberAccessType
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    aiUsages?: AiUsageUpdateManyWithoutClientNestedInput
    auditLogs?: AuditLogUpdateManyWithoutClientNestedInput
    ofOrg?: OrganizationUpdateOneWithoutMembersNestedInput
    marketinAIUsages?: MarketinAIUsageUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumMemberAccessTypeFieldUpdateOperationsInput | $Enums.MemberAccessType
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    aiUsages?: AiUsageUncheckedUpdateManyWithoutClientNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutClientNestedInput
    marketinAIUsages?: MarketinAIUsageUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id: string
    orgId?: string | null
    role: $Enums.MemberAccessType
    email: string
    firstname: string
    lastname: string
    profilePic?: string | null
    createdAt?: Date | string
    lastSeenAt?: Date | string
    personalEmail?: string | null
    phoneNumber?: string | null
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberAccessTypeFieldUpdateOperationsInput | $Enums.MemberAccessType
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumMemberAccessTypeFieldUpdateOperationsInput | $Enums.MemberAccessType
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FinanceCreateInput = {
    id?: string
    month?: Date | string | null
    balance?: number | null
    revenue?: number | null
    expense?: number | null
    netProfit?: number | null
    margin?: number | null
    org: OrganizationCreateNestedOneWithoutFinanceDataInput
  }

  export type FinanceUncheckedCreateInput = {
    id?: string
    orgId: string
    month?: Date | string | null
    balance?: number | null
    revenue?: number | null
    expense?: number | null
    netProfit?: number | null
    margin?: number | null
  }

  export type FinanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    revenue?: NullableIntFieldUpdateOperationsInput | number | null
    expense?: NullableIntFieldUpdateOperationsInput | number | null
    netProfit?: NullableIntFieldUpdateOperationsInput | number | null
    margin?: NullableIntFieldUpdateOperationsInput | number | null
    org?: OrganizationUpdateOneRequiredWithoutFinanceDataNestedInput
  }

  export type FinanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    month?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    revenue?: NullableIntFieldUpdateOperationsInput | number | null
    expense?: NullableIntFieldUpdateOperationsInput | number | null
    netProfit?: NullableIntFieldUpdateOperationsInput | number | null
    margin?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FinanceCreateManyInput = {
    id?: string
    orgId: string
    month?: Date | string | null
    balance?: number | null
    revenue?: number | null
    expense?: number | null
    netProfit?: number | null
    margin?: number | null
  }

  export type FinanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    revenue?: NullableIntFieldUpdateOperationsInput | number | null
    expense?: NullableIntFieldUpdateOperationsInput | number | null
    netProfit?: NullableIntFieldUpdateOperationsInput | number | null
    margin?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FinanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    month?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    revenue?: NullableIntFieldUpdateOperationsInput | number | null
    expense?: NullableIntFieldUpdateOperationsInput | number | null
    netProfit?: NullableIntFieldUpdateOperationsInput | number | null
    margin?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FinanceAnalysisCreateInput = {
    id?: string
    summary: string
    categories: JsonNullValueInput | InputJsonValue
    monthly?: NullableJsonNullValueInput | InputJsonValue
    tips: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    org: OrganizationCreateNestedOneWithoutFinanceAnalysesInput
  }

  export type FinanceAnalysisUncheckedCreateInput = {
    id?: string
    orgId: string
    summary: string
    categories: JsonNullValueInput | InputJsonValue
    monthly?: NullableJsonNullValueInput | InputJsonValue
    tips: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FinanceAnalysisUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    categories?: JsonNullValueInput | InputJsonValue
    monthly?: NullableJsonNullValueInput | InputJsonValue
    tips?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationUpdateOneRequiredWithoutFinanceAnalysesNestedInput
  }

  export type FinanceAnalysisUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    categories?: JsonNullValueInput | InputJsonValue
    monthly?: NullableJsonNullValueInput | InputJsonValue
    tips?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinanceAnalysisCreateManyInput = {
    id?: string
    orgId: string
    summary: string
    categories: JsonNullValueInput | InputJsonValue
    monthly?: NullableJsonNullValueInput | InputJsonValue
    tips: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FinanceAnalysisUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    categories?: JsonNullValueInput | InputJsonValue
    monthly?: NullableJsonNullValueInput | InputJsonValue
    tips?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinanceAnalysisUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    categories?: JsonNullValueInput | InputJsonValue
    monthly?: NullableJsonNullValueInput | InputJsonValue
    tips?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    id?: string
    title: string
    content?: string
    platform: string
    reach?: number
    publishedAt?: Date | string
    published?: boolean
    images?: JsonNullValueInput | InputJsonValue
    org: OrganizationCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    orgId: string
    title: string
    content?: string
    platform: string
    reach?: number
    publishedAt?: Date | string
    published?: boolean
    images?: JsonNullValueInput | InputJsonValue
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    reach?: IntFieldUpdateOperationsInput | number
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    images?: JsonNullValueInput | InputJsonValue
    org?: OrganizationUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    reach?: IntFieldUpdateOperationsInput | number
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    images?: JsonNullValueInput | InputJsonValue
  }

  export type PostCreateManyInput = {
    id?: string
    orgId: string
    title: string
    content?: string
    platform: string
    reach?: number
    publishedAt?: Date | string
    published?: boolean
    images?: JsonNullValueInput | InputJsonValue
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    reach?: IntFieldUpdateOperationsInput | number
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    images?: JsonNullValueInput | InputJsonValue
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    reach?: IntFieldUpdateOperationsInput | number
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    images?: JsonNullValueInput | InputJsonValue
  }

  export type AdministratorCreateInput = {
    id: string
    email: string
    username: string
    password: string
    createdAt?: Date | string
    lastAccessTime?: Date | string
  }

  export type AdministratorUncheckedCreateInput = {
    id: string
    email: string
    username: string
    password: string
    createdAt?: Date | string
    lastAccessTime?: Date | string
  }

  export type AdministratorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAccessTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministratorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAccessTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministratorCreateManyInput = {
    id: string
    email: string
    username: string
    password: string
    createdAt?: Date | string
    lastAccessTime?: Date | string
  }

  export type AdministratorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAccessTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministratorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAccessTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteCodeCreateInput = {
    code: string
    createdBy: string
    expiresAt: Date | string
    Organization: OrganizationCreateNestedOneWithoutInviteCodeInput
  }

  export type InviteCodeUncheckedCreateInput = {
    code: string
    orgId: string
    createdBy: string
    expiresAt: Date | string
  }

  export type InviteCodeUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Organization?: OrganizationUpdateOneRequiredWithoutInviteCodeNestedInput
  }

  export type InviteCodeUncheckedUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteCodeCreateManyInput = {
    code: string
    orgId: string
    createdBy: string
    expiresAt: Date | string
  }

  export type InviteCodeUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteCodeUncheckedUpdateManyInput = {
    code?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    action: $Enums.AuditAction
    target: $Enums.AuditTarget
    details?: string | null
    date?: Date | string
    client: ClientCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    clientId: string
    action: $Enums.AuditAction
    target: $Enums.AuditTarget
    details?: string | null
    date?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    target?: EnumAuditTargetFieldUpdateOperationsInput | $Enums.AuditTarget
    details?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    target?: EnumAuditTargetFieldUpdateOperationsInput | $Enums.AuditTarget
    details?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    clientId: string
    action: $Enums.AuditAction
    target: $Enums.AuditTarget
    details?: string | null
    date?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    target?: EnumAuditTargetFieldUpdateOperationsInput | $Enums.AuditTarget
    details?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    target?: EnumAuditTargetFieldUpdateOperationsInput | $Enums.AuditTarget
    details?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiUsageCreateInput = {
    id?: string
    date?: Date | string
    client: ClientCreateNestedOneWithoutAiUsagesInput
    org: OrganizationCreateNestedOneWithoutAiUsagesInput
  }

  export type AiUsageUncheckedCreateInput = {
    id?: string
    clientId: string
    orgId: string
    date?: Date | string
  }

  export type AiUsageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutAiUsagesNestedInput
    org?: OrganizationUpdateOneRequiredWithoutAiUsagesNestedInput
  }

  export type AiUsageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiUsageCreateManyInput = {
    id?: string
    clientId: string
    orgId: string
    date?: Date | string
  }

  export type AiUsageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiUsageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketinAIUsageCreateInput = {
    id?: string
    date?: Date | string
    client: ClientCreateNestedOneWithoutMarketinAIUsagesInput
    org: OrganizationCreateNestedOneWithoutMarketinAIUsagesInput
  }

  export type MarketinAIUsageUncheckedCreateInput = {
    id?: string
    clientId: string
    orgId: string
    date?: Date | string
  }

  export type MarketinAIUsageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutMarketinAIUsagesNestedInput
    org?: OrganizationUpdateOneRequiredWithoutMarketinAIUsagesNestedInput
  }

  export type MarketinAIUsageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketinAIUsageCreateManyInput = {
    id?: string
    clientId: string
    orgId: string
    date?: Date | string
  }

  export type MarketinAIUsageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketinAIUsageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesCreateInput = {
    id?: string
    date: Date | string
    product: $Enums.Subscription
    buyer: OrganizationCreateNestedOneWithoutSalesInput
  }

  export type SalesUncheckedCreateInput = {
    id?: string
    orgId: string
    date: Date | string
    product: $Enums.Subscription
  }

  export type SalesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription
    buyer?: OrganizationUpdateOneRequiredWithoutSalesNestedInput
  }

  export type SalesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription
  }

  export type SalesCreateManyInput = {
    id?: string
    orgId: string
    date: Date | string
    product: $Enums.Subscription
  }

  export type SalesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription
  }

  export type SalesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumIndustryFilter<$PrismaModel = never> = {
    equals?: $Enums.Industry | EnumIndustryFieldRefInput<$PrismaModel>
    in?: $Enums.Industry[] | ListEnumIndustryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Industry[] | ListEnumIndustryFieldRefInput<$PrismaModel>
    not?: NestedEnumIndustryFilter<$PrismaModel> | $Enums.Industry
  }

  export type EnumSubscriptionFilter<$PrismaModel = never> = {
    equals?: $Enums.Subscription | EnumSubscriptionFieldRefInput<$PrismaModel>
    in?: $Enums.Subscription[] | ListEnumSubscriptionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Subscription[] | ListEnumSubscriptionFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionFilter<$PrismaModel> | $Enums.Subscription
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ClientListRelationFilter = {
    every?: ClientWhereInput
    some?: ClientWhereInput
    none?: ClientWhereInput
  }

  export type FinanceListRelationFilter = {
    every?: FinanceWhereInput
    some?: FinanceWhereInput
    none?: FinanceWhereInput
  }

  export type FinanceAnalysisListRelationFilter = {
    every?: FinanceAnalysisWhereInput
    some?: FinanceAnalysisWhereInput
    none?: FinanceAnalysisWhereInput
  }

  export type InviteCodeListRelationFilter = {
    every?: InviteCodeWhereInput
    some?: InviteCodeWhereInput
    none?: InviteCodeWhereInput
  }

  export type MarketinAIUsageListRelationFilter = {
    every?: MarketinAIUsageWhereInput
    some?: MarketinAIUsageWhereInput
    none?: MarketinAIUsageWhereInput
  }

  export type MarketingStrategyNullableScalarRelationFilter = {
    is?: MarketingStrategyWhereInput | null
    isNot?: MarketingStrategyWhereInput | null
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type SalesListRelationFilter = {
    every?: SalesWhereInput
    some?: SalesWhereInput
    none?: SalesWhereInput
  }

  export type AiUsageListRelationFilter = {
    every?: AiUsageWhereInput
    some?: AiUsageWhereInput
    none?: AiUsageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FinanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FinanceAnalysisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InviteCodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MarketinAIUsageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SalesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AiUsageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    industry?: SortOrder
    patronage?: SortOrder
    createdAt?: SortOrder
    address?: SortOrder
    description?: SortOrder
    emailAddress?: SortOrder
    phoneNumber?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    facebookPageId?: SortOrder
    facebookAccessToken?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    industry?: SortOrder
    patronage?: SortOrder
    createdAt?: SortOrder
    address?: SortOrder
    description?: SortOrder
    emailAddress?: SortOrder
    phoneNumber?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    facebookPageId?: SortOrder
    facebookAccessToken?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    industry?: SortOrder
    patronage?: SortOrder
    createdAt?: SortOrder
    address?: SortOrder
    description?: SortOrder
    emailAddress?: SortOrder
    phoneNumber?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    facebookPageId?: SortOrder
    facebookAccessToken?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumIndustryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Industry | EnumIndustryFieldRefInput<$PrismaModel>
    in?: $Enums.Industry[] | ListEnumIndustryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Industry[] | ListEnumIndustryFieldRefInput<$PrismaModel>
    not?: NestedEnumIndustryWithAggregatesFilter<$PrismaModel> | $Enums.Industry
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIndustryFilter<$PrismaModel>
    _max?: NestedEnumIndustryFilter<$PrismaModel>
  }

  export type EnumSubscriptionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Subscription | EnumSubscriptionFieldRefInput<$PrismaModel>
    in?: $Enums.Subscription[] | ListEnumSubscriptionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Subscription[] | ListEnumSubscriptionFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionWithAggregatesFilter<$PrismaModel> | $Enums.Subscription
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type MarketingStrategyCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    productName?: SortOrder
    description?: SortOrder
    targetAudience?: SortOrder
    advice?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MarketingStrategyMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    productName?: SortOrder
    description?: SortOrder
    targetAudience?: SortOrder
    advice?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MarketingStrategyMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    productName?: SortOrder
    description?: SortOrder
    targetAudience?: SortOrder
    advice?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumMemberAccessTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberAccessType | EnumMemberAccessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MemberAccessType[] | ListEnumMemberAccessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberAccessType[] | ListEnumMemberAccessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberAccessTypeFilter<$PrismaModel> | $Enums.MemberAccessType
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type OrganizationNullableScalarRelationFilter = {
    is?: OrganizationWhereInput | null
    isNot?: OrganizationWhereInput | null
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    role?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    profilePic?: SortOrder
    createdAt?: SortOrder
    lastSeenAt?: SortOrder
    personalEmail?: SortOrder
    phoneNumber?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    role?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    profilePic?: SortOrder
    createdAt?: SortOrder
    lastSeenAt?: SortOrder
    personalEmail?: SortOrder
    phoneNumber?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    role?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    profilePic?: SortOrder
    createdAt?: SortOrder
    lastSeenAt?: SortOrder
    personalEmail?: SortOrder
    phoneNumber?: SortOrder
  }

  export type EnumMemberAccessTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberAccessType | EnumMemberAccessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MemberAccessType[] | ListEnumMemberAccessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberAccessType[] | ListEnumMemberAccessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberAccessTypeWithAggregatesFilter<$PrismaModel> | $Enums.MemberAccessType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMemberAccessTypeFilter<$PrismaModel>
    _max?: NestedEnumMemberAccessTypeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FinanceCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    month?: SortOrder
    balance?: SortOrder
    revenue?: SortOrder
    expense?: SortOrder
    netProfit?: SortOrder
    margin?: SortOrder
  }

  export type FinanceAvgOrderByAggregateInput = {
    balance?: SortOrder
    revenue?: SortOrder
    expense?: SortOrder
    netProfit?: SortOrder
    margin?: SortOrder
  }

  export type FinanceMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    month?: SortOrder
    balance?: SortOrder
    revenue?: SortOrder
    expense?: SortOrder
    netProfit?: SortOrder
    margin?: SortOrder
  }

  export type FinanceMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    month?: SortOrder
    balance?: SortOrder
    revenue?: SortOrder
    expense?: SortOrder
    netProfit?: SortOrder
    margin?: SortOrder
  }

  export type FinanceSumOrderByAggregateInput = {
    balance?: SortOrder
    revenue?: SortOrder
    expense?: SortOrder
    netProfit?: SortOrder
    margin?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FinanceAnalysisCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    summary?: SortOrder
    categories?: SortOrder
    monthly?: SortOrder
    tips?: SortOrder
    createdAt?: SortOrder
  }

  export type FinanceAnalysisMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
  }

  export type FinanceAnalysisMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    platform?: SortOrder
    reach?: SortOrder
    publishedAt?: SortOrder
    published?: SortOrder
    images?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    reach?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    platform?: SortOrder
    reach?: SortOrder
    publishedAt?: SortOrder
    published?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    platform?: SortOrder
    reach?: SortOrder
    publishedAt?: SortOrder
    published?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    reach?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AdministratorCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    lastAccessTime?: SortOrder
  }

  export type AdministratorMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    lastAccessTime?: SortOrder
  }

  export type AdministratorMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    lastAccessTime?: SortOrder
  }

  export type InviteCodeCountOrderByAggregateInput = {
    code?: SortOrder
    orgId?: SortOrder
    createdBy?: SortOrder
    expiresAt?: SortOrder
  }

  export type InviteCodeMaxOrderByAggregateInput = {
    code?: SortOrder
    orgId?: SortOrder
    createdBy?: SortOrder
    expiresAt?: SortOrder
  }

  export type InviteCodeMinOrderByAggregateInput = {
    code?: SortOrder
    orgId?: SortOrder
    createdBy?: SortOrder
    expiresAt?: SortOrder
  }

  export type EnumAuditActionFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditAction | EnumAuditActionFieldRefInput<$PrismaModel>
    in?: $Enums.AuditAction[] | ListEnumAuditActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditAction[] | ListEnumAuditActionFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditActionFilter<$PrismaModel> | $Enums.AuditAction
  }

  export type EnumAuditTargetFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditTarget | EnumAuditTargetFieldRefInput<$PrismaModel>
    in?: $Enums.AuditTarget[] | ListEnumAuditTargetFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditTarget[] | ListEnumAuditTargetFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditTargetFilter<$PrismaModel> | $Enums.AuditTarget
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    action?: SortOrder
    target?: SortOrder
    details?: SortOrder
    date?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    action?: SortOrder
    target?: SortOrder
    details?: SortOrder
    date?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    action?: SortOrder
    target?: SortOrder
    details?: SortOrder
    date?: SortOrder
  }

  export type EnumAuditActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditAction | EnumAuditActionFieldRefInput<$PrismaModel>
    in?: $Enums.AuditAction[] | ListEnumAuditActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditAction[] | ListEnumAuditActionFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditActionWithAggregatesFilter<$PrismaModel> | $Enums.AuditAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuditActionFilter<$PrismaModel>
    _max?: NestedEnumAuditActionFilter<$PrismaModel>
  }

  export type EnumAuditTargetWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditTarget | EnumAuditTargetFieldRefInput<$PrismaModel>
    in?: $Enums.AuditTarget[] | ListEnumAuditTargetFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditTarget[] | ListEnumAuditTargetFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditTargetWithAggregatesFilter<$PrismaModel> | $Enums.AuditTarget
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuditTargetFilter<$PrismaModel>
    _max?: NestedEnumAuditTargetFilter<$PrismaModel>
  }

  export type AiUsageCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    orgId?: SortOrder
    date?: SortOrder
  }

  export type AiUsageMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    orgId?: SortOrder
    date?: SortOrder
  }

  export type AiUsageMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    orgId?: SortOrder
    date?: SortOrder
  }

  export type MarketinAIUsageCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    orgId?: SortOrder
    date?: SortOrder
  }

  export type MarketinAIUsageMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    orgId?: SortOrder
    date?: SortOrder
  }

  export type MarketinAIUsageMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    orgId?: SortOrder
    date?: SortOrder
  }

  export type SalesCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    date?: SortOrder
    product?: SortOrder
  }

  export type SalesMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    date?: SortOrder
    product?: SortOrder
  }

  export type SalesMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    date?: SortOrder
    product?: SortOrder
  }

  export type ClientCreateNestedManyWithoutOfOrgInput = {
    create?: XOR<ClientCreateWithoutOfOrgInput, ClientUncheckedCreateWithoutOfOrgInput> | ClientCreateWithoutOfOrgInput[] | ClientUncheckedCreateWithoutOfOrgInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutOfOrgInput | ClientCreateOrConnectWithoutOfOrgInput[]
    createMany?: ClientCreateManyOfOrgInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type FinanceCreateNestedManyWithoutOrgInput = {
    create?: XOR<FinanceCreateWithoutOrgInput, FinanceUncheckedCreateWithoutOrgInput> | FinanceCreateWithoutOrgInput[] | FinanceUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: FinanceCreateOrConnectWithoutOrgInput | FinanceCreateOrConnectWithoutOrgInput[]
    createMany?: FinanceCreateManyOrgInputEnvelope
    connect?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
  }

  export type FinanceAnalysisCreateNestedManyWithoutOrgInput = {
    create?: XOR<FinanceAnalysisCreateWithoutOrgInput, FinanceAnalysisUncheckedCreateWithoutOrgInput> | FinanceAnalysisCreateWithoutOrgInput[] | FinanceAnalysisUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: FinanceAnalysisCreateOrConnectWithoutOrgInput | FinanceAnalysisCreateOrConnectWithoutOrgInput[]
    createMany?: FinanceAnalysisCreateManyOrgInputEnvelope
    connect?: FinanceAnalysisWhereUniqueInput | FinanceAnalysisWhereUniqueInput[]
  }

  export type InviteCodeCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<InviteCodeCreateWithoutOrganizationInput, InviteCodeUncheckedCreateWithoutOrganizationInput> | InviteCodeCreateWithoutOrganizationInput[] | InviteCodeUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: InviteCodeCreateOrConnectWithoutOrganizationInput | InviteCodeCreateOrConnectWithoutOrganizationInput[]
    createMany?: InviteCodeCreateManyOrganizationInputEnvelope
    connect?: InviteCodeWhereUniqueInput | InviteCodeWhereUniqueInput[]
  }

  export type MarketinAIUsageCreateNestedManyWithoutOrgInput = {
    create?: XOR<MarketinAIUsageCreateWithoutOrgInput, MarketinAIUsageUncheckedCreateWithoutOrgInput> | MarketinAIUsageCreateWithoutOrgInput[] | MarketinAIUsageUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: MarketinAIUsageCreateOrConnectWithoutOrgInput | MarketinAIUsageCreateOrConnectWithoutOrgInput[]
    createMany?: MarketinAIUsageCreateManyOrgInputEnvelope
    connect?: MarketinAIUsageWhereUniqueInput | MarketinAIUsageWhereUniqueInput[]
  }

  export type MarketingStrategyCreateNestedOneWithoutOrgInput = {
    create?: XOR<MarketingStrategyCreateWithoutOrgInput, MarketingStrategyUncheckedCreateWithoutOrgInput>
    connectOrCreate?: MarketingStrategyCreateOrConnectWithoutOrgInput
    connect?: MarketingStrategyWhereUniqueInput
  }

  export type PostCreateNestedManyWithoutOrgInput = {
    create?: XOR<PostCreateWithoutOrgInput, PostUncheckedCreateWithoutOrgInput> | PostCreateWithoutOrgInput[] | PostUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: PostCreateOrConnectWithoutOrgInput | PostCreateOrConnectWithoutOrgInput[]
    createMany?: PostCreateManyOrgInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type SalesCreateNestedManyWithoutBuyerInput = {
    create?: XOR<SalesCreateWithoutBuyerInput, SalesUncheckedCreateWithoutBuyerInput> | SalesCreateWithoutBuyerInput[] | SalesUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: SalesCreateOrConnectWithoutBuyerInput | SalesCreateOrConnectWithoutBuyerInput[]
    createMany?: SalesCreateManyBuyerInputEnvelope
    connect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
  }

  export type AiUsageCreateNestedManyWithoutOrgInput = {
    create?: XOR<AiUsageCreateWithoutOrgInput, AiUsageUncheckedCreateWithoutOrgInput> | AiUsageCreateWithoutOrgInput[] | AiUsageUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: AiUsageCreateOrConnectWithoutOrgInput | AiUsageCreateOrConnectWithoutOrgInput[]
    createMany?: AiUsageCreateManyOrgInputEnvelope
    connect?: AiUsageWhereUniqueInput | AiUsageWhereUniqueInput[]
  }

  export type ClientUncheckedCreateNestedManyWithoutOfOrgInput = {
    create?: XOR<ClientCreateWithoutOfOrgInput, ClientUncheckedCreateWithoutOfOrgInput> | ClientCreateWithoutOfOrgInput[] | ClientUncheckedCreateWithoutOfOrgInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutOfOrgInput | ClientCreateOrConnectWithoutOfOrgInput[]
    createMany?: ClientCreateManyOfOrgInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type FinanceUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<FinanceCreateWithoutOrgInput, FinanceUncheckedCreateWithoutOrgInput> | FinanceCreateWithoutOrgInput[] | FinanceUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: FinanceCreateOrConnectWithoutOrgInput | FinanceCreateOrConnectWithoutOrgInput[]
    createMany?: FinanceCreateManyOrgInputEnvelope
    connect?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
  }

  export type FinanceAnalysisUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<FinanceAnalysisCreateWithoutOrgInput, FinanceAnalysisUncheckedCreateWithoutOrgInput> | FinanceAnalysisCreateWithoutOrgInput[] | FinanceAnalysisUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: FinanceAnalysisCreateOrConnectWithoutOrgInput | FinanceAnalysisCreateOrConnectWithoutOrgInput[]
    createMany?: FinanceAnalysisCreateManyOrgInputEnvelope
    connect?: FinanceAnalysisWhereUniqueInput | FinanceAnalysisWhereUniqueInput[]
  }

  export type InviteCodeUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<InviteCodeCreateWithoutOrganizationInput, InviteCodeUncheckedCreateWithoutOrganizationInput> | InviteCodeCreateWithoutOrganizationInput[] | InviteCodeUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: InviteCodeCreateOrConnectWithoutOrganizationInput | InviteCodeCreateOrConnectWithoutOrganizationInput[]
    createMany?: InviteCodeCreateManyOrganizationInputEnvelope
    connect?: InviteCodeWhereUniqueInput | InviteCodeWhereUniqueInput[]
  }

  export type MarketinAIUsageUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<MarketinAIUsageCreateWithoutOrgInput, MarketinAIUsageUncheckedCreateWithoutOrgInput> | MarketinAIUsageCreateWithoutOrgInput[] | MarketinAIUsageUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: MarketinAIUsageCreateOrConnectWithoutOrgInput | MarketinAIUsageCreateOrConnectWithoutOrgInput[]
    createMany?: MarketinAIUsageCreateManyOrgInputEnvelope
    connect?: MarketinAIUsageWhereUniqueInput | MarketinAIUsageWhereUniqueInput[]
  }

  export type MarketingStrategyUncheckedCreateNestedOneWithoutOrgInput = {
    create?: XOR<MarketingStrategyCreateWithoutOrgInput, MarketingStrategyUncheckedCreateWithoutOrgInput>
    connectOrCreate?: MarketingStrategyCreateOrConnectWithoutOrgInput
    connect?: MarketingStrategyWhereUniqueInput
  }

  export type PostUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<PostCreateWithoutOrgInput, PostUncheckedCreateWithoutOrgInput> | PostCreateWithoutOrgInput[] | PostUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: PostCreateOrConnectWithoutOrgInput | PostCreateOrConnectWithoutOrgInput[]
    createMany?: PostCreateManyOrgInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type SalesUncheckedCreateNestedManyWithoutBuyerInput = {
    create?: XOR<SalesCreateWithoutBuyerInput, SalesUncheckedCreateWithoutBuyerInput> | SalesCreateWithoutBuyerInput[] | SalesUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: SalesCreateOrConnectWithoutBuyerInput | SalesCreateOrConnectWithoutBuyerInput[]
    createMany?: SalesCreateManyBuyerInputEnvelope
    connect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
  }

  export type AiUsageUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<AiUsageCreateWithoutOrgInput, AiUsageUncheckedCreateWithoutOrgInput> | AiUsageCreateWithoutOrgInput[] | AiUsageUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: AiUsageCreateOrConnectWithoutOrgInput | AiUsageCreateOrConnectWithoutOrgInput[]
    createMany?: AiUsageCreateManyOrgInputEnvelope
    connect?: AiUsageWhereUniqueInput | AiUsageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumIndustryFieldUpdateOperationsInput = {
    set?: $Enums.Industry
  }

  export type EnumSubscriptionFieldUpdateOperationsInput = {
    set?: $Enums.Subscription
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ClientUpdateManyWithoutOfOrgNestedInput = {
    create?: XOR<ClientCreateWithoutOfOrgInput, ClientUncheckedCreateWithoutOfOrgInput> | ClientCreateWithoutOfOrgInput[] | ClientUncheckedCreateWithoutOfOrgInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutOfOrgInput | ClientCreateOrConnectWithoutOfOrgInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutOfOrgInput | ClientUpsertWithWhereUniqueWithoutOfOrgInput[]
    createMany?: ClientCreateManyOfOrgInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutOfOrgInput | ClientUpdateWithWhereUniqueWithoutOfOrgInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutOfOrgInput | ClientUpdateManyWithWhereWithoutOfOrgInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type FinanceUpdateManyWithoutOrgNestedInput = {
    create?: XOR<FinanceCreateWithoutOrgInput, FinanceUncheckedCreateWithoutOrgInput> | FinanceCreateWithoutOrgInput[] | FinanceUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: FinanceCreateOrConnectWithoutOrgInput | FinanceCreateOrConnectWithoutOrgInput[]
    upsert?: FinanceUpsertWithWhereUniqueWithoutOrgInput | FinanceUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: FinanceCreateManyOrgInputEnvelope
    set?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
    disconnect?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
    delete?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
    connect?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
    update?: FinanceUpdateWithWhereUniqueWithoutOrgInput | FinanceUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: FinanceUpdateManyWithWhereWithoutOrgInput | FinanceUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: FinanceScalarWhereInput | FinanceScalarWhereInput[]
  }

  export type FinanceAnalysisUpdateManyWithoutOrgNestedInput = {
    create?: XOR<FinanceAnalysisCreateWithoutOrgInput, FinanceAnalysisUncheckedCreateWithoutOrgInput> | FinanceAnalysisCreateWithoutOrgInput[] | FinanceAnalysisUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: FinanceAnalysisCreateOrConnectWithoutOrgInput | FinanceAnalysisCreateOrConnectWithoutOrgInput[]
    upsert?: FinanceAnalysisUpsertWithWhereUniqueWithoutOrgInput | FinanceAnalysisUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: FinanceAnalysisCreateManyOrgInputEnvelope
    set?: FinanceAnalysisWhereUniqueInput | FinanceAnalysisWhereUniqueInput[]
    disconnect?: FinanceAnalysisWhereUniqueInput | FinanceAnalysisWhereUniqueInput[]
    delete?: FinanceAnalysisWhereUniqueInput | FinanceAnalysisWhereUniqueInput[]
    connect?: FinanceAnalysisWhereUniqueInput | FinanceAnalysisWhereUniqueInput[]
    update?: FinanceAnalysisUpdateWithWhereUniqueWithoutOrgInput | FinanceAnalysisUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: FinanceAnalysisUpdateManyWithWhereWithoutOrgInput | FinanceAnalysisUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: FinanceAnalysisScalarWhereInput | FinanceAnalysisScalarWhereInput[]
  }

  export type InviteCodeUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<InviteCodeCreateWithoutOrganizationInput, InviteCodeUncheckedCreateWithoutOrganizationInput> | InviteCodeCreateWithoutOrganizationInput[] | InviteCodeUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: InviteCodeCreateOrConnectWithoutOrganizationInput | InviteCodeCreateOrConnectWithoutOrganizationInput[]
    upsert?: InviteCodeUpsertWithWhereUniqueWithoutOrganizationInput | InviteCodeUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: InviteCodeCreateManyOrganizationInputEnvelope
    set?: InviteCodeWhereUniqueInput | InviteCodeWhereUniqueInput[]
    disconnect?: InviteCodeWhereUniqueInput | InviteCodeWhereUniqueInput[]
    delete?: InviteCodeWhereUniqueInput | InviteCodeWhereUniqueInput[]
    connect?: InviteCodeWhereUniqueInput | InviteCodeWhereUniqueInput[]
    update?: InviteCodeUpdateWithWhereUniqueWithoutOrganizationInput | InviteCodeUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: InviteCodeUpdateManyWithWhereWithoutOrganizationInput | InviteCodeUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: InviteCodeScalarWhereInput | InviteCodeScalarWhereInput[]
  }

  export type MarketinAIUsageUpdateManyWithoutOrgNestedInput = {
    create?: XOR<MarketinAIUsageCreateWithoutOrgInput, MarketinAIUsageUncheckedCreateWithoutOrgInput> | MarketinAIUsageCreateWithoutOrgInput[] | MarketinAIUsageUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: MarketinAIUsageCreateOrConnectWithoutOrgInput | MarketinAIUsageCreateOrConnectWithoutOrgInput[]
    upsert?: MarketinAIUsageUpsertWithWhereUniqueWithoutOrgInput | MarketinAIUsageUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: MarketinAIUsageCreateManyOrgInputEnvelope
    set?: MarketinAIUsageWhereUniqueInput | MarketinAIUsageWhereUniqueInput[]
    disconnect?: MarketinAIUsageWhereUniqueInput | MarketinAIUsageWhereUniqueInput[]
    delete?: MarketinAIUsageWhereUniqueInput | MarketinAIUsageWhereUniqueInput[]
    connect?: MarketinAIUsageWhereUniqueInput | MarketinAIUsageWhereUniqueInput[]
    update?: MarketinAIUsageUpdateWithWhereUniqueWithoutOrgInput | MarketinAIUsageUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: MarketinAIUsageUpdateManyWithWhereWithoutOrgInput | MarketinAIUsageUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: MarketinAIUsageScalarWhereInput | MarketinAIUsageScalarWhereInput[]
  }

  export type MarketingStrategyUpdateOneWithoutOrgNestedInput = {
    create?: XOR<MarketingStrategyCreateWithoutOrgInput, MarketingStrategyUncheckedCreateWithoutOrgInput>
    connectOrCreate?: MarketingStrategyCreateOrConnectWithoutOrgInput
    upsert?: MarketingStrategyUpsertWithoutOrgInput
    disconnect?: MarketingStrategyWhereInput | boolean
    delete?: MarketingStrategyWhereInput | boolean
    connect?: MarketingStrategyWhereUniqueInput
    update?: XOR<XOR<MarketingStrategyUpdateToOneWithWhereWithoutOrgInput, MarketingStrategyUpdateWithoutOrgInput>, MarketingStrategyUncheckedUpdateWithoutOrgInput>
  }

  export type PostUpdateManyWithoutOrgNestedInput = {
    create?: XOR<PostCreateWithoutOrgInput, PostUncheckedCreateWithoutOrgInput> | PostCreateWithoutOrgInput[] | PostUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: PostCreateOrConnectWithoutOrgInput | PostCreateOrConnectWithoutOrgInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutOrgInput | PostUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: PostCreateManyOrgInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutOrgInput | PostUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: PostUpdateManyWithWhereWithoutOrgInput | PostUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type SalesUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<SalesCreateWithoutBuyerInput, SalesUncheckedCreateWithoutBuyerInput> | SalesCreateWithoutBuyerInput[] | SalesUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: SalesCreateOrConnectWithoutBuyerInput | SalesCreateOrConnectWithoutBuyerInput[]
    upsert?: SalesUpsertWithWhereUniqueWithoutBuyerInput | SalesUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: SalesCreateManyBuyerInputEnvelope
    set?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    disconnect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    delete?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    connect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    update?: SalesUpdateWithWhereUniqueWithoutBuyerInput | SalesUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: SalesUpdateManyWithWhereWithoutBuyerInput | SalesUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: SalesScalarWhereInput | SalesScalarWhereInput[]
  }

  export type AiUsageUpdateManyWithoutOrgNestedInput = {
    create?: XOR<AiUsageCreateWithoutOrgInput, AiUsageUncheckedCreateWithoutOrgInput> | AiUsageCreateWithoutOrgInput[] | AiUsageUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: AiUsageCreateOrConnectWithoutOrgInput | AiUsageCreateOrConnectWithoutOrgInput[]
    upsert?: AiUsageUpsertWithWhereUniqueWithoutOrgInput | AiUsageUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: AiUsageCreateManyOrgInputEnvelope
    set?: AiUsageWhereUniqueInput | AiUsageWhereUniqueInput[]
    disconnect?: AiUsageWhereUniqueInput | AiUsageWhereUniqueInput[]
    delete?: AiUsageWhereUniqueInput | AiUsageWhereUniqueInput[]
    connect?: AiUsageWhereUniqueInput | AiUsageWhereUniqueInput[]
    update?: AiUsageUpdateWithWhereUniqueWithoutOrgInput | AiUsageUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: AiUsageUpdateManyWithWhereWithoutOrgInput | AiUsageUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: AiUsageScalarWhereInput | AiUsageScalarWhereInput[]
  }

  export type ClientUncheckedUpdateManyWithoutOfOrgNestedInput = {
    create?: XOR<ClientCreateWithoutOfOrgInput, ClientUncheckedCreateWithoutOfOrgInput> | ClientCreateWithoutOfOrgInput[] | ClientUncheckedCreateWithoutOfOrgInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutOfOrgInput | ClientCreateOrConnectWithoutOfOrgInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutOfOrgInput | ClientUpsertWithWhereUniqueWithoutOfOrgInput[]
    createMany?: ClientCreateManyOfOrgInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutOfOrgInput | ClientUpdateWithWhereUniqueWithoutOfOrgInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutOfOrgInput | ClientUpdateManyWithWhereWithoutOfOrgInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type FinanceUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<FinanceCreateWithoutOrgInput, FinanceUncheckedCreateWithoutOrgInput> | FinanceCreateWithoutOrgInput[] | FinanceUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: FinanceCreateOrConnectWithoutOrgInput | FinanceCreateOrConnectWithoutOrgInput[]
    upsert?: FinanceUpsertWithWhereUniqueWithoutOrgInput | FinanceUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: FinanceCreateManyOrgInputEnvelope
    set?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
    disconnect?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
    delete?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
    connect?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
    update?: FinanceUpdateWithWhereUniqueWithoutOrgInput | FinanceUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: FinanceUpdateManyWithWhereWithoutOrgInput | FinanceUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: FinanceScalarWhereInput | FinanceScalarWhereInput[]
  }

  export type FinanceAnalysisUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<FinanceAnalysisCreateWithoutOrgInput, FinanceAnalysisUncheckedCreateWithoutOrgInput> | FinanceAnalysisCreateWithoutOrgInput[] | FinanceAnalysisUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: FinanceAnalysisCreateOrConnectWithoutOrgInput | FinanceAnalysisCreateOrConnectWithoutOrgInput[]
    upsert?: FinanceAnalysisUpsertWithWhereUniqueWithoutOrgInput | FinanceAnalysisUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: FinanceAnalysisCreateManyOrgInputEnvelope
    set?: FinanceAnalysisWhereUniqueInput | FinanceAnalysisWhereUniqueInput[]
    disconnect?: FinanceAnalysisWhereUniqueInput | FinanceAnalysisWhereUniqueInput[]
    delete?: FinanceAnalysisWhereUniqueInput | FinanceAnalysisWhereUniqueInput[]
    connect?: FinanceAnalysisWhereUniqueInput | FinanceAnalysisWhereUniqueInput[]
    update?: FinanceAnalysisUpdateWithWhereUniqueWithoutOrgInput | FinanceAnalysisUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: FinanceAnalysisUpdateManyWithWhereWithoutOrgInput | FinanceAnalysisUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: FinanceAnalysisScalarWhereInput | FinanceAnalysisScalarWhereInput[]
  }

  export type InviteCodeUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<InviteCodeCreateWithoutOrganizationInput, InviteCodeUncheckedCreateWithoutOrganizationInput> | InviteCodeCreateWithoutOrganizationInput[] | InviteCodeUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: InviteCodeCreateOrConnectWithoutOrganizationInput | InviteCodeCreateOrConnectWithoutOrganizationInput[]
    upsert?: InviteCodeUpsertWithWhereUniqueWithoutOrganizationInput | InviteCodeUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: InviteCodeCreateManyOrganizationInputEnvelope
    set?: InviteCodeWhereUniqueInput | InviteCodeWhereUniqueInput[]
    disconnect?: InviteCodeWhereUniqueInput | InviteCodeWhereUniqueInput[]
    delete?: InviteCodeWhereUniqueInput | InviteCodeWhereUniqueInput[]
    connect?: InviteCodeWhereUniqueInput | InviteCodeWhereUniqueInput[]
    update?: InviteCodeUpdateWithWhereUniqueWithoutOrganizationInput | InviteCodeUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: InviteCodeUpdateManyWithWhereWithoutOrganizationInput | InviteCodeUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: InviteCodeScalarWhereInput | InviteCodeScalarWhereInput[]
  }

  export type MarketinAIUsageUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<MarketinAIUsageCreateWithoutOrgInput, MarketinAIUsageUncheckedCreateWithoutOrgInput> | MarketinAIUsageCreateWithoutOrgInput[] | MarketinAIUsageUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: MarketinAIUsageCreateOrConnectWithoutOrgInput | MarketinAIUsageCreateOrConnectWithoutOrgInput[]
    upsert?: MarketinAIUsageUpsertWithWhereUniqueWithoutOrgInput | MarketinAIUsageUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: MarketinAIUsageCreateManyOrgInputEnvelope
    set?: MarketinAIUsageWhereUniqueInput | MarketinAIUsageWhereUniqueInput[]
    disconnect?: MarketinAIUsageWhereUniqueInput | MarketinAIUsageWhereUniqueInput[]
    delete?: MarketinAIUsageWhereUniqueInput | MarketinAIUsageWhereUniqueInput[]
    connect?: MarketinAIUsageWhereUniqueInput | MarketinAIUsageWhereUniqueInput[]
    update?: MarketinAIUsageUpdateWithWhereUniqueWithoutOrgInput | MarketinAIUsageUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: MarketinAIUsageUpdateManyWithWhereWithoutOrgInput | MarketinAIUsageUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: MarketinAIUsageScalarWhereInput | MarketinAIUsageScalarWhereInput[]
  }

  export type MarketingStrategyUncheckedUpdateOneWithoutOrgNestedInput = {
    create?: XOR<MarketingStrategyCreateWithoutOrgInput, MarketingStrategyUncheckedCreateWithoutOrgInput>
    connectOrCreate?: MarketingStrategyCreateOrConnectWithoutOrgInput
    upsert?: MarketingStrategyUpsertWithoutOrgInput
    disconnect?: MarketingStrategyWhereInput | boolean
    delete?: MarketingStrategyWhereInput | boolean
    connect?: MarketingStrategyWhereUniqueInput
    update?: XOR<XOR<MarketingStrategyUpdateToOneWithWhereWithoutOrgInput, MarketingStrategyUpdateWithoutOrgInput>, MarketingStrategyUncheckedUpdateWithoutOrgInput>
  }

  export type PostUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<PostCreateWithoutOrgInput, PostUncheckedCreateWithoutOrgInput> | PostCreateWithoutOrgInput[] | PostUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: PostCreateOrConnectWithoutOrgInput | PostCreateOrConnectWithoutOrgInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutOrgInput | PostUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: PostCreateManyOrgInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutOrgInput | PostUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: PostUpdateManyWithWhereWithoutOrgInput | PostUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type SalesUncheckedUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<SalesCreateWithoutBuyerInput, SalesUncheckedCreateWithoutBuyerInput> | SalesCreateWithoutBuyerInput[] | SalesUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: SalesCreateOrConnectWithoutBuyerInput | SalesCreateOrConnectWithoutBuyerInput[]
    upsert?: SalesUpsertWithWhereUniqueWithoutBuyerInput | SalesUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: SalesCreateManyBuyerInputEnvelope
    set?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    disconnect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    delete?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    connect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    update?: SalesUpdateWithWhereUniqueWithoutBuyerInput | SalesUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: SalesUpdateManyWithWhereWithoutBuyerInput | SalesUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: SalesScalarWhereInput | SalesScalarWhereInput[]
  }

  export type AiUsageUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<AiUsageCreateWithoutOrgInput, AiUsageUncheckedCreateWithoutOrgInput> | AiUsageCreateWithoutOrgInput[] | AiUsageUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: AiUsageCreateOrConnectWithoutOrgInput | AiUsageCreateOrConnectWithoutOrgInput[]
    upsert?: AiUsageUpsertWithWhereUniqueWithoutOrgInput | AiUsageUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: AiUsageCreateManyOrgInputEnvelope
    set?: AiUsageWhereUniqueInput | AiUsageWhereUniqueInput[]
    disconnect?: AiUsageWhereUniqueInput | AiUsageWhereUniqueInput[]
    delete?: AiUsageWhereUniqueInput | AiUsageWhereUniqueInput[]
    connect?: AiUsageWhereUniqueInput | AiUsageWhereUniqueInput[]
    update?: AiUsageUpdateWithWhereUniqueWithoutOrgInput | AiUsageUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: AiUsageUpdateManyWithWhereWithoutOrgInput | AiUsageUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: AiUsageScalarWhereInput | AiUsageScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutMarketingStrategyInput = {
    create?: XOR<OrganizationCreateWithoutMarketingStrategyInput, OrganizationUncheckedCreateWithoutMarketingStrategyInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutMarketingStrategyInput
    connect?: OrganizationWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutMarketingStrategyNestedInput = {
    create?: XOR<OrganizationCreateWithoutMarketingStrategyInput, OrganizationUncheckedCreateWithoutMarketingStrategyInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutMarketingStrategyInput
    upsert?: OrganizationUpsertWithoutMarketingStrategyInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutMarketingStrategyInput, OrganizationUpdateWithoutMarketingStrategyInput>, OrganizationUncheckedUpdateWithoutMarketingStrategyInput>
  }

  export type AiUsageCreateNestedManyWithoutClientInput = {
    create?: XOR<AiUsageCreateWithoutClientInput, AiUsageUncheckedCreateWithoutClientInput> | AiUsageCreateWithoutClientInput[] | AiUsageUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AiUsageCreateOrConnectWithoutClientInput | AiUsageCreateOrConnectWithoutClientInput[]
    createMany?: AiUsageCreateManyClientInputEnvelope
    connect?: AiUsageWhereUniqueInput | AiUsageWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutClientInput = {
    create?: XOR<AuditLogCreateWithoutClientInput, AuditLogUncheckedCreateWithoutClientInput> | AuditLogCreateWithoutClientInput[] | AuditLogUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutClientInput | AuditLogCreateOrConnectWithoutClientInput[]
    createMany?: AuditLogCreateManyClientInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type OrganizationCreateNestedOneWithoutMembersInput = {
    create?: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutMembersInput
    connect?: OrganizationWhereUniqueInput
  }

  export type MarketinAIUsageCreateNestedManyWithoutClientInput = {
    create?: XOR<MarketinAIUsageCreateWithoutClientInput, MarketinAIUsageUncheckedCreateWithoutClientInput> | MarketinAIUsageCreateWithoutClientInput[] | MarketinAIUsageUncheckedCreateWithoutClientInput[]
    connectOrCreate?: MarketinAIUsageCreateOrConnectWithoutClientInput | MarketinAIUsageCreateOrConnectWithoutClientInput[]
    createMany?: MarketinAIUsageCreateManyClientInputEnvelope
    connect?: MarketinAIUsageWhereUniqueInput | MarketinAIUsageWhereUniqueInput[]
  }

  export type AiUsageUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<AiUsageCreateWithoutClientInput, AiUsageUncheckedCreateWithoutClientInput> | AiUsageCreateWithoutClientInput[] | AiUsageUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AiUsageCreateOrConnectWithoutClientInput | AiUsageCreateOrConnectWithoutClientInput[]
    createMany?: AiUsageCreateManyClientInputEnvelope
    connect?: AiUsageWhereUniqueInput | AiUsageWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<AuditLogCreateWithoutClientInput, AuditLogUncheckedCreateWithoutClientInput> | AuditLogCreateWithoutClientInput[] | AuditLogUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutClientInput | AuditLogCreateOrConnectWithoutClientInput[]
    createMany?: AuditLogCreateManyClientInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type MarketinAIUsageUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<MarketinAIUsageCreateWithoutClientInput, MarketinAIUsageUncheckedCreateWithoutClientInput> | MarketinAIUsageCreateWithoutClientInput[] | MarketinAIUsageUncheckedCreateWithoutClientInput[]
    connectOrCreate?: MarketinAIUsageCreateOrConnectWithoutClientInput | MarketinAIUsageCreateOrConnectWithoutClientInput[]
    createMany?: MarketinAIUsageCreateManyClientInputEnvelope
    connect?: MarketinAIUsageWhereUniqueInput | MarketinAIUsageWhereUniqueInput[]
  }

  export type EnumMemberAccessTypeFieldUpdateOperationsInput = {
    set?: $Enums.MemberAccessType
  }

  export type AiUsageUpdateManyWithoutClientNestedInput = {
    create?: XOR<AiUsageCreateWithoutClientInput, AiUsageUncheckedCreateWithoutClientInput> | AiUsageCreateWithoutClientInput[] | AiUsageUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AiUsageCreateOrConnectWithoutClientInput | AiUsageCreateOrConnectWithoutClientInput[]
    upsert?: AiUsageUpsertWithWhereUniqueWithoutClientInput | AiUsageUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: AiUsageCreateManyClientInputEnvelope
    set?: AiUsageWhereUniqueInput | AiUsageWhereUniqueInput[]
    disconnect?: AiUsageWhereUniqueInput | AiUsageWhereUniqueInput[]
    delete?: AiUsageWhereUniqueInput | AiUsageWhereUniqueInput[]
    connect?: AiUsageWhereUniqueInput | AiUsageWhereUniqueInput[]
    update?: AiUsageUpdateWithWhereUniqueWithoutClientInput | AiUsageUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: AiUsageUpdateManyWithWhereWithoutClientInput | AiUsageUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: AiUsageScalarWhereInput | AiUsageScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutClientNestedInput = {
    create?: XOR<AuditLogCreateWithoutClientInput, AuditLogUncheckedCreateWithoutClientInput> | AuditLogCreateWithoutClientInput[] | AuditLogUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutClientInput | AuditLogCreateOrConnectWithoutClientInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutClientInput | AuditLogUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: AuditLogCreateManyClientInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutClientInput | AuditLogUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutClientInput | AuditLogUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type OrganizationUpdateOneWithoutMembersNestedInput = {
    create?: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutMembersInput
    upsert?: OrganizationUpsertWithoutMembersInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutMembersInput, OrganizationUpdateWithoutMembersInput>, OrganizationUncheckedUpdateWithoutMembersInput>
  }

  export type MarketinAIUsageUpdateManyWithoutClientNestedInput = {
    create?: XOR<MarketinAIUsageCreateWithoutClientInput, MarketinAIUsageUncheckedCreateWithoutClientInput> | MarketinAIUsageCreateWithoutClientInput[] | MarketinAIUsageUncheckedCreateWithoutClientInput[]
    connectOrCreate?: MarketinAIUsageCreateOrConnectWithoutClientInput | MarketinAIUsageCreateOrConnectWithoutClientInput[]
    upsert?: MarketinAIUsageUpsertWithWhereUniqueWithoutClientInput | MarketinAIUsageUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: MarketinAIUsageCreateManyClientInputEnvelope
    set?: MarketinAIUsageWhereUniqueInput | MarketinAIUsageWhereUniqueInput[]
    disconnect?: MarketinAIUsageWhereUniqueInput | MarketinAIUsageWhereUniqueInput[]
    delete?: MarketinAIUsageWhereUniqueInput | MarketinAIUsageWhereUniqueInput[]
    connect?: MarketinAIUsageWhereUniqueInput | MarketinAIUsageWhereUniqueInput[]
    update?: MarketinAIUsageUpdateWithWhereUniqueWithoutClientInput | MarketinAIUsageUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: MarketinAIUsageUpdateManyWithWhereWithoutClientInput | MarketinAIUsageUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: MarketinAIUsageScalarWhereInput | MarketinAIUsageScalarWhereInput[]
  }

  export type AiUsageUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<AiUsageCreateWithoutClientInput, AiUsageUncheckedCreateWithoutClientInput> | AiUsageCreateWithoutClientInput[] | AiUsageUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AiUsageCreateOrConnectWithoutClientInput | AiUsageCreateOrConnectWithoutClientInput[]
    upsert?: AiUsageUpsertWithWhereUniqueWithoutClientInput | AiUsageUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: AiUsageCreateManyClientInputEnvelope
    set?: AiUsageWhereUniqueInput | AiUsageWhereUniqueInput[]
    disconnect?: AiUsageWhereUniqueInput | AiUsageWhereUniqueInput[]
    delete?: AiUsageWhereUniqueInput | AiUsageWhereUniqueInput[]
    connect?: AiUsageWhereUniqueInput | AiUsageWhereUniqueInput[]
    update?: AiUsageUpdateWithWhereUniqueWithoutClientInput | AiUsageUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: AiUsageUpdateManyWithWhereWithoutClientInput | AiUsageUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: AiUsageScalarWhereInput | AiUsageScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<AuditLogCreateWithoutClientInput, AuditLogUncheckedCreateWithoutClientInput> | AuditLogCreateWithoutClientInput[] | AuditLogUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutClientInput | AuditLogCreateOrConnectWithoutClientInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutClientInput | AuditLogUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: AuditLogCreateManyClientInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutClientInput | AuditLogUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutClientInput | AuditLogUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type MarketinAIUsageUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<MarketinAIUsageCreateWithoutClientInput, MarketinAIUsageUncheckedCreateWithoutClientInput> | MarketinAIUsageCreateWithoutClientInput[] | MarketinAIUsageUncheckedCreateWithoutClientInput[]
    connectOrCreate?: MarketinAIUsageCreateOrConnectWithoutClientInput | MarketinAIUsageCreateOrConnectWithoutClientInput[]
    upsert?: MarketinAIUsageUpsertWithWhereUniqueWithoutClientInput | MarketinAIUsageUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: MarketinAIUsageCreateManyClientInputEnvelope
    set?: MarketinAIUsageWhereUniqueInput | MarketinAIUsageWhereUniqueInput[]
    disconnect?: MarketinAIUsageWhereUniqueInput | MarketinAIUsageWhereUniqueInput[]
    delete?: MarketinAIUsageWhereUniqueInput | MarketinAIUsageWhereUniqueInput[]
    connect?: MarketinAIUsageWhereUniqueInput | MarketinAIUsageWhereUniqueInput[]
    update?: MarketinAIUsageUpdateWithWhereUniqueWithoutClientInput | MarketinAIUsageUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: MarketinAIUsageUpdateManyWithWhereWithoutClientInput | MarketinAIUsageUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: MarketinAIUsageScalarWhereInput | MarketinAIUsageScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutFinanceDataInput = {
    create?: XOR<OrganizationCreateWithoutFinanceDataInput, OrganizationUncheckedCreateWithoutFinanceDataInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutFinanceDataInput
    connect?: OrganizationWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrganizationUpdateOneRequiredWithoutFinanceDataNestedInput = {
    create?: XOR<OrganizationCreateWithoutFinanceDataInput, OrganizationUncheckedCreateWithoutFinanceDataInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutFinanceDataInput
    upsert?: OrganizationUpsertWithoutFinanceDataInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutFinanceDataInput, OrganizationUpdateWithoutFinanceDataInput>, OrganizationUncheckedUpdateWithoutFinanceDataInput>
  }

  export type OrganizationCreateNestedOneWithoutFinanceAnalysesInput = {
    create?: XOR<OrganizationCreateWithoutFinanceAnalysesInput, OrganizationUncheckedCreateWithoutFinanceAnalysesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutFinanceAnalysesInput
    connect?: OrganizationWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutFinanceAnalysesNestedInput = {
    create?: XOR<OrganizationCreateWithoutFinanceAnalysesInput, OrganizationUncheckedCreateWithoutFinanceAnalysesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutFinanceAnalysesInput
    upsert?: OrganizationUpsertWithoutFinanceAnalysesInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutFinanceAnalysesInput, OrganizationUpdateWithoutFinanceAnalysesInput>, OrganizationUncheckedUpdateWithoutFinanceAnalysesInput>
  }

  export type OrganizationCreateNestedOneWithoutPostsInput = {
    create?: XOR<OrganizationCreateWithoutPostsInput, OrganizationUncheckedCreateWithoutPostsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutPostsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type OrganizationUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<OrganizationCreateWithoutPostsInput, OrganizationUncheckedCreateWithoutPostsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutPostsInput
    upsert?: OrganizationUpsertWithoutPostsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutPostsInput, OrganizationUpdateWithoutPostsInput>, OrganizationUncheckedUpdateWithoutPostsInput>
  }

  export type OrganizationCreateNestedOneWithoutInviteCodeInput = {
    create?: XOR<OrganizationCreateWithoutInviteCodeInput, OrganizationUncheckedCreateWithoutInviteCodeInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutInviteCodeInput
    connect?: OrganizationWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutInviteCodeNestedInput = {
    create?: XOR<OrganizationCreateWithoutInviteCodeInput, OrganizationUncheckedCreateWithoutInviteCodeInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutInviteCodeInput
    upsert?: OrganizationUpsertWithoutInviteCodeInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutInviteCodeInput, OrganizationUpdateWithoutInviteCodeInput>, OrganizationUncheckedUpdateWithoutInviteCodeInput>
  }

  export type ClientCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<ClientCreateWithoutAuditLogsInput, ClientUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutAuditLogsInput
    connect?: ClientWhereUniqueInput
  }

  export type EnumAuditActionFieldUpdateOperationsInput = {
    set?: $Enums.AuditAction
  }

  export type EnumAuditTargetFieldUpdateOperationsInput = {
    set?: $Enums.AuditTarget
  }

  export type ClientUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<ClientCreateWithoutAuditLogsInput, ClientUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutAuditLogsInput
    upsert?: ClientUpsertWithoutAuditLogsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutAuditLogsInput, ClientUpdateWithoutAuditLogsInput>, ClientUncheckedUpdateWithoutAuditLogsInput>
  }

  export type ClientCreateNestedOneWithoutAiUsagesInput = {
    create?: XOR<ClientCreateWithoutAiUsagesInput, ClientUncheckedCreateWithoutAiUsagesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutAiUsagesInput
    connect?: ClientWhereUniqueInput
  }

  export type OrganizationCreateNestedOneWithoutAiUsagesInput = {
    create?: XOR<OrganizationCreateWithoutAiUsagesInput, OrganizationUncheckedCreateWithoutAiUsagesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutAiUsagesInput
    connect?: OrganizationWhereUniqueInput
  }

  export type ClientUpdateOneRequiredWithoutAiUsagesNestedInput = {
    create?: XOR<ClientCreateWithoutAiUsagesInput, ClientUncheckedCreateWithoutAiUsagesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutAiUsagesInput
    upsert?: ClientUpsertWithoutAiUsagesInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutAiUsagesInput, ClientUpdateWithoutAiUsagesInput>, ClientUncheckedUpdateWithoutAiUsagesInput>
  }

  export type OrganizationUpdateOneRequiredWithoutAiUsagesNestedInput = {
    create?: XOR<OrganizationCreateWithoutAiUsagesInput, OrganizationUncheckedCreateWithoutAiUsagesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutAiUsagesInput
    upsert?: OrganizationUpsertWithoutAiUsagesInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutAiUsagesInput, OrganizationUpdateWithoutAiUsagesInput>, OrganizationUncheckedUpdateWithoutAiUsagesInput>
  }

  export type ClientCreateNestedOneWithoutMarketinAIUsagesInput = {
    create?: XOR<ClientCreateWithoutMarketinAIUsagesInput, ClientUncheckedCreateWithoutMarketinAIUsagesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutMarketinAIUsagesInput
    connect?: ClientWhereUniqueInput
  }

  export type OrganizationCreateNestedOneWithoutMarketinAIUsagesInput = {
    create?: XOR<OrganizationCreateWithoutMarketinAIUsagesInput, OrganizationUncheckedCreateWithoutMarketinAIUsagesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutMarketinAIUsagesInput
    connect?: OrganizationWhereUniqueInput
  }

  export type ClientUpdateOneRequiredWithoutMarketinAIUsagesNestedInput = {
    create?: XOR<ClientCreateWithoutMarketinAIUsagesInput, ClientUncheckedCreateWithoutMarketinAIUsagesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutMarketinAIUsagesInput
    upsert?: ClientUpsertWithoutMarketinAIUsagesInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutMarketinAIUsagesInput, ClientUpdateWithoutMarketinAIUsagesInput>, ClientUncheckedUpdateWithoutMarketinAIUsagesInput>
  }

  export type OrganizationUpdateOneRequiredWithoutMarketinAIUsagesNestedInput = {
    create?: XOR<OrganizationCreateWithoutMarketinAIUsagesInput, OrganizationUncheckedCreateWithoutMarketinAIUsagesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutMarketinAIUsagesInput
    upsert?: OrganizationUpsertWithoutMarketinAIUsagesInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutMarketinAIUsagesInput, OrganizationUpdateWithoutMarketinAIUsagesInput>, OrganizationUncheckedUpdateWithoutMarketinAIUsagesInput>
  }

  export type OrganizationCreateNestedOneWithoutSalesInput = {
    create?: XOR<OrganizationCreateWithoutSalesInput, OrganizationUncheckedCreateWithoutSalesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutSalesInput
    connect?: OrganizationWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<OrganizationCreateWithoutSalesInput, OrganizationUncheckedCreateWithoutSalesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutSalesInput
    upsert?: OrganizationUpsertWithoutSalesInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutSalesInput, OrganizationUpdateWithoutSalesInput>, OrganizationUncheckedUpdateWithoutSalesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumIndustryFilter<$PrismaModel = never> = {
    equals?: $Enums.Industry | EnumIndustryFieldRefInput<$PrismaModel>
    in?: $Enums.Industry[] | ListEnumIndustryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Industry[] | ListEnumIndustryFieldRefInput<$PrismaModel>
    not?: NestedEnumIndustryFilter<$PrismaModel> | $Enums.Industry
  }

  export type NestedEnumSubscriptionFilter<$PrismaModel = never> = {
    equals?: $Enums.Subscription | EnumSubscriptionFieldRefInput<$PrismaModel>
    in?: $Enums.Subscription[] | ListEnumSubscriptionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Subscription[] | ListEnumSubscriptionFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionFilter<$PrismaModel> | $Enums.Subscription
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumIndustryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Industry | EnumIndustryFieldRefInput<$PrismaModel>
    in?: $Enums.Industry[] | ListEnumIndustryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Industry[] | ListEnumIndustryFieldRefInput<$PrismaModel>
    not?: NestedEnumIndustryWithAggregatesFilter<$PrismaModel> | $Enums.Industry
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIndustryFilter<$PrismaModel>
    _max?: NestedEnumIndustryFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Subscription | EnumSubscriptionFieldRefInput<$PrismaModel>
    in?: $Enums.Subscription[] | ListEnumSubscriptionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Subscription[] | ListEnumSubscriptionFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionWithAggregatesFilter<$PrismaModel> | $Enums.Subscription
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumMemberAccessTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberAccessType | EnumMemberAccessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MemberAccessType[] | ListEnumMemberAccessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberAccessType[] | ListEnumMemberAccessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberAccessTypeFilter<$PrismaModel> | $Enums.MemberAccessType
  }

  export type NestedEnumMemberAccessTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberAccessType | EnumMemberAccessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MemberAccessType[] | ListEnumMemberAccessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberAccessType[] | ListEnumMemberAccessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberAccessTypeWithAggregatesFilter<$PrismaModel> | $Enums.MemberAccessType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMemberAccessTypeFilter<$PrismaModel>
    _max?: NestedEnumMemberAccessTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumAuditActionFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditAction | EnumAuditActionFieldRefInput<$PrismaModel>
    in?: $Enums.AuditAction[] | ListEnumAuditActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditAction[] | ListEnumAuditActionFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditActionFilter<$PrismaModel> | $Enums.AuditAction
  }

  export type NestedEnumAuditTargetFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditTarget | EnumAuditTargetFieldRefInput<$PrismaModel>
    in?: $Enums.AuditTarget[] | ListEnumAuditTargetFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditTarget[] | ListEnumAuditTargetFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditTargetFilter<$PrismaModel> | $Enums.AuditTarget
  }

  export type NestedEnumAuditActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditAction | EnumAuditActionFieldRefInput<$PrismaModel>
    in?: $Enums.AuditAction[] | ListEnumAuditActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditAction[] | ListEnumAuditActionFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditActionWithAggregatesFilter<$PrismaModel> | $Enums.AuditAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuditActionFilter<$PrismaModel>
    _max?: NestedEnumAuditActionFilter<$PrismaModel>
  }

  export type NestedEnumAuditTargetWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditTarget | EnumAuditTargetFieldRefInput<$PrismaModel>
    in?: $Enums.AuditTarget[] | ListEnumAuditTargetFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditTarget[] | ListEnumAuditTargetFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditTargetWithAggregatesFilter<$PrismaModel> | $Enums.AuditTarget
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuditTargetFilter<$PrismaModel>
    _max?: NestedEnumAuditTargetFilter<$PrismaModel>
  }

  export type ClientCreateWithoutOfOrgInput = {
    id: string
    role: $Enums.MemberAccessType
    email: string
    firstname: string
    lastname: string
    profilePic?: string | null
    createdAt?: Date | string
    lastSeenAt?: Date | string
    personalEmail?: string | null
    phoneNumber?: string | null
    aiUsages?: AiUsageCreateNestedManyWithoutClientInput
    auditLogs?: AuditLogCreateNestedManyWithoutClientInput
    marketinAIUsages?: MarketinAIUsageCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutOfOrgInput = {
    id: string
    role: $Enums.MemberAccessType
    email: string
    firstname: string
    lastname: string
    profilePic?: string | null
    createdAt?: Date | string
    lastSeenAt?: Date | string
    personalEmail?: string | null
    phoneNumber?: string | null
    aiUsages?: AiUsageUncheckedCreateNestedManyWithoutClientInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutClientInput
    marketinAIUsages?: MarketinAIUsageUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutOfOrgInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutOfOrgInput, ClientUncheckedCreateWithoutOfOrgInput>
  }

  export type ClientCreateManyOfOrgInputEnvelope = {
    data: ClientCreateManyOfOrgInput | ClientCreateManyOfOrgInput[]
    skipDuplicates?: boolean
  }

  export type FinanceCreateWithoutOrgInput = {
    id?: string
    month?: Date | string | null
    balance?: number | null
    revenue?: number | null
    expense?: number | null
    netProfit?: number | null
    margin?: number | null
  }

  export type FinanceUncheckedCreateWithoutOrgInput = {
    id?: string
    month?: Date | string | null
    balance?: number | null
    revenue?: number | null
    expense?: number | null
    netProfit?: number | null
    margin?: number | null
  }

  export type FinanceCreateOrConnectWithoutOrgInput = {
    where: FinanceWhereUniqueInput
    create: XOR<FinanceCreateWithoutOrgInput, FinanceUncheckedCreateWithoutOrgInput>
  }

  export type FinanceCreateManyOrgInputEnvelope = {
    data: FinanceCreateManyOrgInput | FinanceCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type FinanceAnalysisCreateWithoutOrgInput = {
    id?: string
    summary: string
    categories: JsonNullValueInput | InputJsonValue
    monthly?: NullableJsonNullValueInput | InputJsonValue
    tips: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FinanceAnalysisUncheckedCreateWithoutOrgInput = {
    id?: string
    summary: string
    categories: JsonNullValueInput | InputJsonValue
    monthly?: NullableJsonNullValueInput | InputJsonValue
    tips: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FinanceAnalysisCreateOrConnectWithoutOrgInput = {
    where: FinanceAnalysisWhereUniqueInput
    create: XOR<FinanceAnalysisCreateWithoutOrgInput, FinanceAnalysisUncheckedCreateWithoutOrgInput>
  }

  export type FinanceAnalysisCreateManyOrgInputEnvelope = {
    data: FinanceAnalysisCreateManyOrgInput | FinanceAnalysisCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type InviteCodeCreateWithoutOrganizationInput = {
    code: string
    createdBy: string
    expiresAt: Date | string
  }

  export type InviteCodeUncheckedCreateWithoutOrganizationInput = {
    code: string
    createdBy: string
    expiresAt: Date | string
  }

  export type InviteCodeCreateOrConnectWithoutOrganizationInput = {
    where: InviteCodeWhereUniqueInput
    create: XOR<InviteCodeCreateWithoutOrganizationInput, InviteCodeUncheckedCreateWithoutOrganizationInput>
  }

  export type InviteCodeCreateManyOrganizationInputEnvelope = {
    data: InviteCodeCreateManyOrganizationInput | InviteCodeCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type MarketinAIUsageCreateWithoutOrgInput = {
    id?: string
    date?: Date | string
    client: ClientCreateNestedOneWithoutMarketinAIUsagesInput
  }

  export type MarketinAIUsageUncheckedCreateWithoutOrgInput = {
    id?: string
    clientId: string
    date?: Date | string
  }

  export type MarketinAIUsageCreateOrConnectWithoutOrgInput = {
    where: MarketinAIUsageWhereUniqueInput
    create: XOR<MarketinAIUsageCreateWithoutOrgInput, MarketinAIUsageUncheckedCreateWithoutOrgInput>
  }

  export type MarketinAIUsageCreateManyOrgInputEnvelope = {
    data: MarketinAIUsageCreateManyOrgInput | MarketinAIUsageCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type MarketingStrategyCreateWithoutOrgInput = {
    id?: string
    productName: string
    description: string
    targetAudience: string
    advice?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type MarketingStrategyUncheckedCreateWithoutOrgInput = {
    id?: string
    productName: string
    description: string
    targetAudience: string
    advice?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type MarketingStrategyCreateOrConnectWithoutOrgInput = {
    where: MarketingStrategyWhereUniqueInput
    create: XOR<MarketingStrategyCreateWithoutOrgInput, MarketingStrategyUncheckedCreateWithoutOrgInput>
  }

  export type PostCreateWithoutOrgInput = {
    id?: string
    title: string
    content?: string
    platform: string
    reach?: number
    publishedAt?: Date | string
    published?: boolean
    images?: JsonNullValueInput | InputJsonValue
  }

  export type PostUncheckedCreateWithoutOrgInput = {
    id?: string
    title: string
    content?: string
    platform: string
    reach?: number
    publishedAt?: Date | string
    published?: boolean
    images?: JsonNullValueInput | InputJsonValue
  }

  export type PostCreateOrConnectWithoutOrgInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutOrgInput, PostUncheckedCreateWithoutOrgInput>
  }

  export type PostCreateManyOrgInputEnvelope = {
    data: PostCreateManyOrgInput | PostCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type SalesCreateWithoutBuyerInput = {
    id?: string
    date: Date | string
    product: $Enums.Subscription
  }

  export type SalesUncheckedCreateWithoutBuyerInput = {
    id?: string
    date: Date | string
    product: $Enums.Subscription
  }

  export type SalesCreateOrConnectWithoutBuyerInput = {
    where: SalesWhereUniqueInput
    create: XOR<SalesCreateWithoutBuyerInput, SalesUncheckedCreateWithoutBuyerInput>
  }

  export type SalesCreateManyBuyerInputEnvelope = {
    data: SalesCreateManyBuyerInput | SalesCreateManyBuyerInput[]
    skipDuplicates?: boolean
  }

  export type AiUsageCreateWithoutOrgInput = {
    id?: string
    date?: Date | string
    client: ClientCreateNestedOneWithoutAiUsagesInput
  }

  export type AiUsageUncheckedCreateWithoutOrgInput = {
    id?: string
    clientId: string
    date?: Date | string
  }

  export type AiUsageCreateOrConnectWithoutOrgInput = {
    where: AiUsageWhereUniqueInput
    create: XOR<AiUsageCreateWithoutOrgInput, AiUsageUncheckedCreateWithoutOrgInput>
  }

  export type AiUsageCreateManyOrgInputEnvelope = {
    data: AiUsageCreateManyOrgInput | AiUsageCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type ClientUpsertWithWhereUniqueWithoutOfOrgInput = {
    where: ClientWhereUniqueInput
    update: XOR<ClientUpdateWithoutOfOrgInput, ClientUncheckedUpdateWithoutOfOrgInput>
    create: XOR<ClientCreateWithoutOfOrgInput, ClientUncheckedCreateWithoutOfOrgInput>
  }

  export type ClientUpdateWithWhereUniqueWithoutOfOrgInput = {
    where: ClientWhereUniqueInput
    data: XOR<ClientUpdateWithoutOfOrgInput, ClientUncheckedUpdateWithoutOfOrgInput>
  }

  export type ClientUpdateManyWithWhereWithoutOfOrgInput = {
    where: ClientScalarWhereInput
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyWithoutOfOrgInput>
  }

  export type ClientScalarWhereInput = {
    AND?: ClientScalarWhereInput | ClientScalarWhereInput[]
    OR?: ClientScalarWhereInput[]
    NOT?: ClientScalarWhereInput | ClientScalarWhereInput[]
    id?: StringFilter<"Client"> | string
    orgId?: StringNullableFilter<"Client"> | string | null
    role?: EnumMemberAccessTypeFilter<"Client"> | $Enums.MemberAccessType
    email?: StringFilter<"Client"> | string
    firstname?: StringFilter<"Client"> | string
    lastname?: StringFilter<"Client"> | string
    profilePic?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeFilter<"Client"> | Date | string
    lastSeenAt?: DateTimeFilter<"Client"> | Date | string
    personalEmail?: StringNullableFilter<"Client"> | string | null
    phoneNumber?: StringNullableFilter<"Client"> | string | null
  }

  export type FinanceUpsertWithWhereUniqueWithoutOrgInput = {
    where: FinanceWhereUniqueInput
    update: XOR<FinanceUpdateWithoutOrgInput, FinanceUncheckedUpdateWithoutOrgInput>
    create: XOR<FinanceCreateWithoutOrgInput, FinanceUncheckedCreateWithoutOrgInput>
  }

  export type FinanceUpdateWithWhereUniqueWithoutOrgInput = {
    where: FinanceWhereUniqueInput
    data: XOR<FinanceUpdateWithoutOrgInput, FinanceUncheckedUpdateWithoutOrgInput>
  }

  export type FinanceUpdateManyWithWhereWithoutOrgInput = {
    where: FinanceScalarWhereInput
    data: XOR<FinanceUpdateManyMutationInput, FinanceUncheckedUpdateManyWithoutOrgInput>
  }

  export type FinanceScalarWhereInput = {
    AND?: FinanceScalarWhereInput | FinanceScalarWhereInput[]
    OR?: FinanceScalarWhereInput[]
    NOT?: FinanceScalarWhereInput | FinanceScalarWhereInput[]
    id?: StringFilter<"Finance"> | string
    orgId?: StringFilter<"Finance"> | string
    month?: DateTimeNullableFilter<"Finance"> | Date | string | null
    balance?: IntNullableFilter<"Finance"> | number | null
    revenue?: IntNullableFilter<"Finance"> | number | null
    expense?: IntNullableFilter<"Finance"> | number | null
    netProfit?: IntNullableFilter<"Finance"> | number | null
    margin?: IntNullableFilter<"Finance"> | number | null
  }

  export type FinanceAnalysisUpsertWithWhereUniqueWithoutOrgInput = {
    where: FinanceAnalysisWhereUniqueInput
    update: XOR<FinanceAnalysisUpdateWithoutOrgInput, FinanceAnalysisUncheckedUpdateWithoutOrgInput>
    create: XOR<FinanceAnalysisCreateWithoutOrgInput, FinanceAnalysisUncheckedCreateWithoutOrgInput>
  }

  export type FinanceAnalysisUpdateWithWhereUniqueWithoutOrgInput = {
    where: FinanceAnalysisWhereUniqueInput
    data: XOR<FinanceAnalysisUpdateWithoutOrgInput, FinanceAnalysisUncheckedUpdateWithoutOrgInput>
  }

  export type FinanceAnalysisUpdateManyWithWhereWithoutOrgInput = {
    where: FinanceAnalysisScalarWhereInput
    data: XOR<FinanceAnalysisUpdateManyMutationInput, FinanceAnalysisUncheckedUpdateManyWithoutOrgInput>
  }

  export type FinanceAnalysisScalarWhereInput = {
    AND?: FinanceAnalysisScalarWhereInput | FinanceAnalysisScalarWhereInput[]
    OR?: FinanceAnalysisScalarWhereInput[]
    NOT?: FinanceAnalysisScalarWhereInput | FinanceAnalysisScalarWhereInput[]
    id?: StringFilter<"FinanceAnalysis"> | string
    orgId?: StringFilter<"FinanceAnalysis"> | string
    summary?: StringFilter<"FinanceAnalysis"> | string
    categories?: JsonFilter<"FinanceAnalysis">
    monthly?: JsonNullableFilter<"FinanceAnalysis">
    tips?: JsonFilter<"FinanceAnalysis">
    createdAt?: DateTimeFilter<"FinanceAnalysis"> | Date | string
  }

  export type InviteCodeUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: InviteCodeWhereUniqueInput
    update: XOR<InviteCodeUpdateWithoutOrganizationInput, InviteCodeUncheckedUpdateWithoutOrganizationInput>
    create: XOR<InviteCodeCreateWithoutOrganizationInput, InviteCodeUncheckedCreateWithoutOrganizationInput>
  }

  export type InviteCodeUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: InviteCodeWhereUniqueInput
    data: XOR<InviteCodeUpdateWithoutOrganizationInput, InviteCodeUncheckedUpdateWithoutOrganizationInput>
  }

  export type InviteCodeUpdateManyWithWhereWithoutOrganizationInput = {
    where: InviteCodeScalarWhereInput
    data: XOR<InviteCodeUpdateManyMutationInput, InviteCodeUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type InviteCodeScalarWhereInput = {
    AND?: InviteCodeScalarWhereInput | InviteCodeScalarWhereInput[]
    OR?: InviteCodeScalarWhereInput[]
    NOT?: InviteCodeScalarWhereInput | InviteCodeScalarWhereInput[]
    code?: StringFilter<"InviteCode"> | string
    orgId?: StringFilter<"InviteCode"> | string
    createdBy?: StringFilter<"InviteCode"> | string
    expiresAt?: DateTimeFilter<"InviteCode"> | Date | string
  }

  export type MarketinAIUsageUpsertWithWhereUniqueWithoutOrgInput = {
    where: MarketinAIUsageWhereUniqueInput
    update: XOR<MarketinAIUsageUpdateWithoutOrgInput, MarketinAIUsageUncheckedUpdateWithoutOrgInput>
    create: XOR<MarketinAIUsageCreateWithoutOrgInput, MarketinAIUsageUncheckedCreateWithoutOrgInput>
  }

  export type MarketinAIUsageUpdateWithWhereUniqueWithoutOrgInput = {
    where: MarketinAIUsageWhereUniqueInput
    data: XOR<MarketinAIUsageUpdateWithoutOrgInput, MarketinAIUsageUncheckedUpdateWithoutOrgInput>
  }

  export type MarketinAIUsageUpdateManyWithWhereWithoutOrgInput = {
    where: MarketinAIUsageScalarWhereInput
    data: XOR<MarketinAIUsageUpdateManyMutationInput, MarketinAIUsageUncheckedUpdateManyWithoutOrgInput>
  }

  export type MarketinAIUsageScalarWhereInput = {
    AND?: MarketinAIUsageScalarWhereInput | MarketinAIUsageScalarWhereInput[]
    OR?: MarketinAIUsageScalarWhereInput[]
    NOT?: MarketinAIUsageScalarWhereInput | MarketinAIUsageScalarWhereInput[]
    id?: StringFilter<"MarketinAIUsage"> | string
    clientId?: StringFilter<"MarketinAIUsage"> | string
    orgId?: StringFilter<"MarketinAIUsage"> | string
    date?: DateTimeFilter<"MarketinAIUsage"> | Date | string
  }

  export type MarketingStrategyUpsertWithoutOrgInput = {
    update: XOR<MarketingStrategyUpdateWithoutOrgInput, MarketingStrategyUncheckedUpdateWithoutOrgInput>
    create: XOR<MarketingStrategyCreateWithoutOrgInput, MarketingStrategyUncheckedCreateWithoutOrgInput>
    where?: MarketingStrategyWhereInput
  }

  export type MarketingStrategyUpdateToOneWithWhereWithoutOrgInput = {
    where?: MarketingStrategyWhereInput
    data: XOR<MarketingStrategyUpdateWithoutOrgInput, MarketingStrategyUncheckedUpdateWithoutOrgInput>
  }

  export type MarketingStrategyUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    advice?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketingStrategyUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    advice?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpsertWithWhereUniqueWithoutOrgInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutOrgInput, PostUncheckedUpdateWithoutOrgInput>
    create: XOR<PostCreateWithoutOrgInput, PostUncheckedCreateWithoutOrgInput>
  }

  export type PostUpdateWithWhereUniqueWithoutOrgInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutOrgInput, PostUncheckedUpdateWithoutOrgInput>
  }

  export type PostUpdateManyWithWhereWithoutOrgInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutOrgInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    orgId?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    platform?: StringFilter<"Post"> | string
    reach?: IntFilter<"Post"> | number
    publishedAt?: DateTimeFilter<"Post"> | Date | string
    published?: BoolFilter<"Post"> | boolean
    images?: JsonFilter<"Post">
  }

  export type SalesUpsertWithWhereUniqueWithoutBuyerInput = {
    where: SalesWhereUniqueInput
    update: XOR<SalesUpdateWithoutBuyerInput, SalesUncheckedUpdateWithoutBuyerInput>
    create: XOR<SalesCreateWithoutBuyerInput, SalesUncheckedCreateWithoutBuyerInput>
  }

  export type SalesUpdateWithWhereUniqueWithoutBuyerInput = {
    where: SalesWhereUniqueInput
    data: XOR<SalesUpdateWithoutBuyerInput, SalesUncheckedUpdateWithoutBuyerInput>
  }

  export type SalesUpdateManyWithWhereWithoutBuyerInput = {
    where: SalesScalarWhereInput
    data: XOR<SalesUpdateManyMutationInput, SalesUncheckedUpdateManyWithoutBuyerInput>
  }

  export type SalesScalarWhereInput = {
    AND?: SalesScalarWhereInput | SalesScalarWhereInput[]
    OR?: SalesScalarWhereInput[]
    NOT?: SalesScalarWhereInput | SalesScalarWhereInput[]
    id?: StringFilter<"Sales"> | string
    orgId?: StringFilter<"Sales"> | string
    date?: DateTimeFilter<"Sales"> | Date | string
    product?: EnumSubscriptionFilter<"Sales"> | $Enums.Subscription
  }

  export type AiUsageUpsertWithWhereUniqueWithoutOrgInput = {
    where: AiUsageWhereUniqueInput
    update: XOR<AiUsageUpdateWithoutOrgInput, AiUsageUncheckedUpdateWithoutOrgInput>
    create: XOR<AiUsageCreateWithoutOrgInput, AiUsageUncheckedCreateWithoutOrgInput>
  }

  export type AiUsageUpdateWithWhereUniqueWithoutOrgInput = {
    where: AiUsageWhereUniqueInput
    data: XOR<AiUsageUpdateWithoutOrgInput, AiUsageUncheckedUpdateWithoutOrgInput>
  }

  export type AiUsageUpdateManyWithWhereWithoutOrgInput = {
    where: AiUsageScalarWhereInput
    data: XOR<AiUsageUpdateManyMutationInput, AiUsageUncheckedUpdateManyWithoutOrgInput>
  }

  export type AiUsageScalarWhereInput = {
    AND?: AiUsageScalarWhereInput | AiUsageScalarWhereInput[]
    OR?: AiUsageScalarWhereInput[]
    NOT?: AiUsageScalarWhereInput | AiUsageScalarWhereInput[]
    id?: StringFilter<"AiUsage"> | string
    clientId?: StringFilter<"AiUsage"> | string
    orgId?: StringFilter<"AiUsage"> | string
    date?: DateTimeFilter<"AiUsage"> | Date | string
  }

  export type OrganizationCreateWithoutMarketingStrategyInput = {
    id: string
    name?: string
    industry: $Enums.Industry
    patronage: $Enums.Subscription
    createdAt?: Date | string
    address: string
    description: string
    emailAddress: string
    phoneNumber: string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    facebookPageId?: string | null
    facebookAccessToken?: string | null
    members?: ClientCreateNestedManyWithoutOfOrgInput
    financeData?: FinanceCreateNestedManyWithoutOrgInput
    financeAnalyses?: FinanceAnalysisCreateNestedManyWithoutOrgInput
    InviteCode?: InviteCodeCreateNestedManyWithoutOrganizationInput
    marketinAIUsages?: MarketinAIUsageCreateNestedManyWithoutOrgInput
    posts?: PostCreateNestedManyWithoutOrgInput
    sales?: SalesCreateNestedManyWithoutBuyerInput
    aiUsages?: AiUsageCreateNestedManyWithoutOrgInput
  }

  export type OrganizationUncheckedCreateWithoutMarketingStrategyInput = {
    id: string
    name?: string
    industry: $Enums.Industry
    patronage: $Enums.Subscription
    createdAt?: Date | string
    address: string
    description: string
    emailAddress: string
    phoneNumber: string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    facebookPageId?: string | null
    facebookAccessToken?: string | null
    members?: ClientUncheckedCreateNestedManyWithoutOfOrgInput
    financeData?: FinanceUncheckedCreateNestedManyWithoutOrgInput
    financeAnalyses?: FinanceAnalysisUncheckedCreateNestedManyWithoutOrgInput
    InviteCode?: InviteCodeUncheckedCreateNestedManyWithoutOrganizationInput
    marketinAIUsages?: MarketinAIUsageUncheckedCreateNestedManyWithoutOrgInput
    posts?: PostUncheckedCreateNestedManyWithoutOrgInput
    sales?: SalesUncheckedCreateNestedManyWithoutBuyerInput
    aiUsages?: AiUsageUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrganizationCreateOrConnectWithoutMarketingStrategyInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutMarketingStrategyInput, OrganizationUncheckedCreateWithoutMarketingStrategyInput>
  }

  export type OrganizationUpsertWithoutMarketingStrategyInput = {
    update: XOR<OrganizationUpdateWithoutMarketingStrategyInput, OrganizationUncheckedUpdateWithoutMarketingStrategyInput>
    create: XOR<OrganizationCreateWithoutMarketingStrategyInput, OrganizationUncheckedCreateWithoutMarketingStrategyInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutMarketingStrategyInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutMarketingStrategyInput, OrganizationUncheckedUpdateWithoutMarketingStrategyInput>
  }

  export type OrganizationUpdateWithoutMarketingStrategyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    industry?: EnumIndustryFieldUpdateOperationsInput | $Enums.Industry
    patronage?: EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPageId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    members?: ClientUpdateManyWithoutOfOrgNestedInput
    financeData?: FinanceUpdateManyWithoutOrgNestedInput
    financeAnalyses?: FinanceAnalysisUpdateManyWithoutOrgNestedInput
    InviteCode?: InviteCodeUpdateManyWithoutOrganizationNestedInput
    marketinAIUsages?: MarketinAIUsageUpdateManyWithoutOrgNestedInput
    posts?: PostUpdateManyWithoutOrgNestedInput
    sales?: SalesUpdateManyWithoutBuyerNestedInput
    aiUsages?: AiUsageUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutMarketingStrategyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    industry?: EnumIndustryFieldUpdateOperationsInput | $Enums.Industry
    patronage?: EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPageId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    members?: ClientUncheckedUpdateManyWithoutOfOrgNestedInput
    financeData?: FinanceUncheckedUpdateManyWithoutOrgNestedInput
    financeAnalyses?: FinanceAnalysisUncheckedUpdateManyWithoutOrgNestedInput
    InviteCode?: InviteCodeUncheckedUpdateManyWithoutOrganizationNestedInput
    marketinAIUsages?: MarketinAIUsageUncheckedUpdateManyWithoutOrgNestedInput
    posts?: PostUncheckedUpdateManyWithoutOrgNestedInput
    sales?: SalesUncheckedUpdateManyWithoutBuyerNestedInput
    aiUsages?: AiUsageUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type AiUsageCreateWithoutClientInput = {
    id?: string
    date?: Date | string
    org: OrganizationCreateNestedOneWithoutAiUsagesInput
  }

  export type AiUsageUncheckedCreateWithoutClientInput = {
    id?: string
    orgId: string
    date?: Date | string
  }

  export type AiUsageCreateOrConnectWithoutClientInput = {
    where: AiUsageWhereUniqueInput
    create: XOR<AiUsageCreateWithoutClientInput, AiUsageUncheckedCreateWithoutClientInput>
  }

  export type AiUsageCreateManyClientInputEnvelope = {
    data: AiUsageCreateManyClientInput | AiUsageCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutClientInput = {
    id?: string
    action: $Enums.AuditAction
    target: $Enums.AuditTarget
    details?: string | null
    date?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutClientInput = {
    id?: string
    action: $Enums.AuditAction
    target: $Enums.AuditTarget
    details?: string | null
    date?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutClientInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutClientInput, AuditLogUncheckedCreateWithoutClientInput>
  }

  export type AuditLogCreateManyClientInputEnvelope = {
    data: AuditLogCreateManyClientInput | AuditLogCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationCreateWithoutMembersInput = {
    id: string
    name?: string
    industry: $Enums.Industry
    patronage: $Enums.Subscription
    createdAt?: Date | string
    address: string
    description: string
    emailAddress: string
    phoneNumber: string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    facebookPageId?: string | null
    facebookAccessToken?: string | null
    financeData?: FinanceCreateNestedManyWithoutOrgInput
    financeAnalyses?: FinanceAnalysisCreateNestedManyWithoutOrgInput
    InviteCode?: InviteCodeCreateNestedManyWithoutOrganizationInput
    marketinAIUsages?: MarketinAIUsageCreateNestedManyWithoutOrgInput
    marketingStrategy?: MarketingStrategyCreateNestedOneWithoutOrgInput
    posts?: PostCreateNestedManyWithoutOrgInput
    sales?: SalesCreateNestedManyWithoutBuyerInput
    aiUsages?: AiUsageCreateNestedManyWithoutOrgInput
  }

  export type OrganizationUncheckedCreateWithoutMembersInput = {
    id: string
    name?: string
    industry: $Enums.Industry
    patronage: $Enums.Subscription
    createdAt?: Date | string
    address: string
    description: string
    emailAddress: string
    phoneNumber: string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    facebookPageId?: string | null
    facebookAccessToken?: string | null
    financeData?: FinanceUncheckedCreateNestedManyWithoutOrgInput
    financeAnalyses?: FinanceAnalysisUncheckedCreateNestedManyWithoutOrgInput
    InviteCode?: InviteCodeUncheckedCreateNestedManyWithoutOrganizationInput
    marketinAIUsages?: MarketinAIUsageUncheckedCreateNestedManyWithoutOrgInput
    marketingStrategy?: MarketingStrategyUncheckedCreateNestedOneWithoutOrgInput
    posts?: PostUncheckedCreateNestedManyWithoutOrgInput
    sales?: SalesUncheckedCreateNestedManyWithoutBuyerInput
    aiUsages?: AiUsageUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrganizationCreateOrConnectWithoutMembersInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput>
  }

  export type MarketinAIUsageCreateWithoutClientInput = {
    id?: string
    date?: Date | string
    org: OrganizationCreateNestedOneWithoutMarketinAIUsagesInput
  }

  export type MarketinAIUsageUncheckedCreateWithoutClientInput = {
    id?: string
    orgId: string
    date?: Date | string
  }

  export type MarketinAIUsageCreateOrConnectWithoutClientInput = {
    where: MarketinAIUsageWhereUniqueInput
    create: XOR<MarketinAIUsageCreateWithoutClientInput, MarketinAIUsageUncheckedCreateWithoutClientInput>
  }

  export type MarketinAIUsageCreateManyClientInputEnvelope = {
    data: MarketinAIUsageCreateManyClientInput | MarketinAIUsageCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type AiUsageUpsertWithWhereUniqueWithoutClientInput = {
    where: AiUsageWhereUniqueInput
    update: XOR<AiUsageUpdateWithoutClientInput, AiUsageUncheckedUpdateWithoutClientInput>
    create: XOR<AiUsageCreateWithoutClientInput, AiUsageUncheckedCreateWithoutClientInput>
  }

  export type AiUsageUpdateWithWhereUniqueWithoutClientInput = {
    where: AiUsageWhereUniqueInput
    data: XOR<AiUsageUpdateWithoutClientInput, AiUsageUncheckedUpdateWithoutClientInput>
  }

  export type AiUsageUpdateManyWithWhereWithoutClientInput = {
    where: AiUsageScalarWhereInput
    data: XOR<AiUsageUpdateManyMutationInput, AiUsageUncheckedUpdateManyWithoutClientInput>
  }

  export type AuditLogUpsertWithWhereUniqueWithoutClientInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutClientInput, AuditLogUncheckedUpdateWithoutClientInput>
    create: XOR<AuditLogCreateWithoutClientInput, AuditLogUncheckedCreateWithoutClientInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutClientInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutClientInput, AuditLogUncheckedUpdateWithoutClientInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutClientInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutClientInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    clientId?: StringFilter<"AuditLog"> | string
    action?: EnumAuditActionFilter<"AuditLog"> | $Enums.AuditAction
    target?: EnumAuditTargetFilter<"AuditLog"> | $Enums.AuditTarget
    details?: StringNullableFilter<"AuditLog"> | string | null
    date?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type OrganizationUpsertWithoutMembersInput = {
    update: XOR<OrganizationUpdateWithoutMembersInput, OrganizationUncheckedUpdateWithoutMembersInput>
    create: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutMembersInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutMembersInput, OrganizationUncheckedUpdateWithoutMembersInput>
  }

  export type OrganizationUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    industry?: EnumIndustryFieldUpdateOperationsInput | $Enums.Industry
    patronage?: EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPageId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    financeData?: FinanceUpdateManyWithoutOrgNestedInput
    financeAnalyses?: FinanceAnalysisUpdateManyWithoutOrgNestedInput
    InviteCode?: InviteCodeUpdateManyWithoutOrganizationNestedInput
    marketinAIUsages?: MarketinAIUsageUpdateManyWithoutOrgNestedInput
    marketingStrategy?: MarketingStrategyUpdateOneWithoutOrgNestedInput
    posts?: PostUpdateManyWithoutOrgNestedInput
    sales?: SalesUpdateManyWithoutBuyerNestedInput
    aiUsages?: AiUsageUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    industry?: EnumIndustryFieldUpdateOperationsInput | $Enums.Industry
    patronage?: EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPageId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    financeData?: FinanceUncheckedUpdateManyWithoutOrgNestedInput
    financeAnalyses?: FinanceAnalysisUncheckedUpdateManyWithoutOrgNestedInput
    InviteCode?: InviteCodeUncheckedUpdateManyWithoutOrganizationNestedInput
    marketinAIUsages?: MarketinAIUsageUncheckedUpdateManyWithoutOrgNestedInput
    marketingStrategy?: MarketingStrategyUncheckedUpdateOneWithoutOrgNestedInput
    posts?: PostUncheckedUpdateManyWithoutOrgNestedInput
    sales?: SalesUncheckedUpdateManyWithoutBuyerNestedInput
    aiUsages?: AiUsageUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type MarketinAIUsageUpsertWithWhereUniqueWithoutClientInput = {
    where: MarketinAIUsageWhereUniqueInput
    update: XOR<MarketinAIUsageUpdateWithoutClientInput, MarketinAIUsageUncheckedUpdateWithoutClientInput>
    create: XOR<MarketinAIUsageCreateWithoutClientInput, MarketinAIUsageUncheckedCreateWithoutClientInput>
  }

  export type MarketinAIUsageUpdateWithWhereUniqueWithoutClientInput = {
    where: MarketinAIUsageWhereUniqueInput
    data: XOR<MarketinAIUsageUpdateWithoutClientInput, MarketinAIUsageUncheckedUpdateWithoutClientInput>
  }

  export type MarketinAIUsageUpdateManyWithWhereWithoutClientInput = {
    where: MarketinAIUsageScalarWhereInput
    data: XOR<MarketinAIUsageUpdateManyMutationInput, MarketinAIUsageUncheckedUpdateManyWithoutClientInput>
  }

  export type OrganizationCreateWithoutFinanceDataInput = {
    id: string
    name?: string
    industry: $Enums.Industry
    patronage: $Enums.Subscription
    createdAt?: Date | string
    address: string
    description: string
    emailAddress: string
    phoneNumber: string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    facebookPageId?: string | null
    facebookAccessToken?: string | null
    members?: ClientCreateNestedManyWithoutOfOrgInput
    financeAnalyses?: FinanceAnalysisCreateNestedManyWithoutOrgInput
    InviteCode?: InviteCodeCreateNestedManyWithoutOrganizationInput
    marketinAIUsages?: MarketinAIUsageCreateNestedManyWithoutOrgInput
    marketingStrategy?: MarketingStrategyCreateNestedOneWithoutOrgInput
    posts?: PostCreateNestedManyWithoutOrgInput
    sales?: SalesCreateNestedManyWithoutBuyerInput
    aiUsages?: AiUsageCreateNestedManyWithoutOrgInput
  }

  export type OrganizationUncheckedCreateWithoutFinanceDataInput = {
    id: string
    name?: string
    industry: $Enums.Industry
    patronage: $Enums.Subscription
    createdAt?: Date | string
    address: string
    description: string
    emailAddress: string
    phoneNumber: string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    facebookPageId?: string | null
    facebookAccessToken?: string | null
    members?: ClientUncheckedCreateNestedManyWithoutOfOrgInput
    financeAnalyses?: FinanceAnalysisUncheckedCreateNestedManyWithoutOrgInput
    InviteCode?: InviteCodeUncheckedCreateNestedManyWithoutOrganizationInput
    marketinAIUsages?: MarketinAIUsageUncheckedCreateNestedManyWithoutOrgInput
    marketingStrategy?: MarketingStrategyUncheckedCreateNestedOneWithoutOrgInput
    posts?: PostUncheckedCreateNestedManyWithoutOrgInput
    sales?: SalesUncheckedCreateNestedManyWithoutBuyerInput
    aiUsages?: AiUsageUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrganizationCreateOrConnectWithoutFinanceDataInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutFinanceDataInput, OrganizationUncheckedCreateWithoutFinanceDataInput>
  }

  export type OrganizationUpsertWithoutFinanceDataInput = {
    update: XOR<OrganizationUpdateWithoutFinanceDataInput, OrganizationUncheckedUpdateWithoutFinanceDataInput>
    create: XOR<OrganizationCreateWithoutFinanceDataInput, OrganizationUncheckedCreateWithoutFinanceDataInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutFinanceDataInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutFinanceDataInput, OrganizationUncheckedUpdateWithoutFinanceDataInput>
  }

  export type OrganizationUpdateWithoutFinanceDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    industry?: EnumIndustryFieldUpdateOperationsInput | $Enums.Industry
    patronage?: EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPageId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    members?: ClientUpdateManyWithoutOfOrgNestedInput
    financeAnalyses?: FinanceAnalysisUpdateManyWithoutOrgNestedInput
    InviteCode?: InviteCodeUpdateManyWithoutOrganizationNestedInput
    marketinAIUsages?: MarketinAIUsageUpdateManyWithoutOrgNestedInput
    marketingStrategy?: MarketingStrategyUpdateOneWithoutOrgNestedInput
    posts?: PostUpdateManyWithoutOrgNestedInput
    sales?: SalesUpdateManyWithoutBuyerNestedInput
    aiUsages?: AiUsageUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutFinanceDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    industry?: EnumIndustryFieldUpdateOperationsInput | $Enums.Industry
    patronage?: EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPageId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    members?: ClientUncheckedUpdateManyWithoutOfOrgNestedInput
    financeAnalyses?: FinanceAnalysisUncheckedUpdateManyWithoutOrgNestedInput
    InviteCode?: InviteCodeUncheckedUpdateManyWithoutOrganizationNestedInput
    marketinAIUsages?: MarketinAIUsageUncheckedUpdateManyWithoutOrgNestedInput
    marketingStrategy?: MarketingStrategyUncheckedUpdateOneWithoutOrgNestedInput
    posts?: PostUncheckedUpdateManyWithoutOrgNestedInput
    sales?: SalesUncheckedUpdateManyWithoutBuyerNestedInput
    aiUsages?: AiUsageUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationCreateWithoutFinanceAnalysesInput = {
    id: string
    name?: string
    industry: $Enums.Industry
    patronage: $Enums.Subscription
    createdAt?: Date | string
    address: string
    description: string
    emailAddress: string
    phoneNumber: string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    facebookPageId?: string | null
    facebookAccessToken?: string | null
    members?: ClientCreateNestedManyWithoutOfOrgInput
    financeData?: FinanceCreateNestedManyWithoutOrgInput
    InviteCode?: InviteCodeCreateNestedManyWithoutOrganizationInput
    marketinAIUsages?: MarketinAIUsageCreateNestedManyWithoutOrgInput
    marketingStrategy?: MarketingStrategyCreateNestedOneWithoutOrgInput
    posts?: PostCreateNestedManyWithoutOrgInput
    sales?: SalesCreateNestedManyWithoutBuyerInput
    aiUsages?: AiUsageCreateNestedManyWithoutOrgInput
  }

  export type OrganizationUncheckedCreateWithoutFinanceAnalysesInput = {
    id: string
    name?: string
    industry: $Enums.Industry
    patronage: $Enums.Subscription
    createdAt?: Date | string
    address: string
    description: string
    emailAddress: string
    phoneNumber: string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    facebookPageId?: string | null
    facebookAccessToken?: string | null
    members?: ClientUncheckedCreateNestedManyWithoutOfOrgInput
    financeData?: FinanceUncheckedCreateNestedManyWithoutOrgInput
    InviteCode?: InviteCodeUncheckedCreateNestedManyWithoutOrganizationInput
    marketinAIUsages?: MarketinAIUsageUncheckedCreateNestedManyWithoutOrgInput
    marketingStrategy?: MarketingStrategyUncheckedCreateNestedOneWithoutOrgInput
    posts?: PostUncheckedCreateNestedManyWithoutOrgInput
    sales?: SalesUncheckedCreateNestedManyWithoutBuyerInput
    aiUsages?: AiUsageUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrganizationCreateOrConnectWithoutFinanceAnalysesInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutFinanceAnalysesInput, OrganizationUncheckedCreateWithoutFinanceAnalysesInput>
  }

  export type OrganizationUpsertWithoutFinanceAnalysesInput = {
    update: XOR<OrganizationUpdateWithoutFinanceAnalysesInput, OrganizationUncheckedUpdateWithoutFinanceAnalysesInput>
    create: XOR<OrganizationCreateWithoutFinanceAnalysesInput, OrganizationUncheckedCreateWithoutFinanceAnalysesInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutFinanceAnalysesInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutFinanceAnalysesInput, OrganizationUncheckedUpdateWithoutFinanceAnalysesInput>
  }

  export type OrganizationUpdateWithoutFinanceAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    industry?: EnumIndustryFieldUpdateOperationsInput | $Enums.Industry
    patronage?: EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPageId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    members?: ClientUpdateManyWithoutOfOrgNestedInput
    financeData?: FinanceUpdateManyWithoutOrgNestedInput
    InviteCode?: InviteCodeUpdateManyWithoutOrganizationNestedInput
    marketinAIUsages?: MarketinAIUsageUpdateManyWithoutOrgNestedInput
    marketingStrategy?: MarketingStrategyUpdateOneWithoutOrgNestedInput
    posts?: PostUpdateManyWithoutOrgNestedInput
    sales?: SalesUpdateManyWithoutBuyerNestedInput
    aiUsages?: AiUsageUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutFinanceAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    industry?: EnumIndustryFieldUpdateOperationsInput | $Enums.Industry
    patronage?: EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPageId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    members?: ClientUncheckedUpdateManyWithoutOfOrgNestedInput
    financeData?: FinanceUncheckedUpdateManyWithoutOrgNestedInput
    InviteCode?: InviteCodeUncheckedUpdateManyWithoutOrganizationNestedInput
    marketinAIUsages?: MarketinAIUsageUncheckedUpdateManyWithoutOrgNestedInput
    marketingStrategy?: MarketingStrategyUncheckedUpdateOneWithoutOrgNestedInput
    posts?: PostUncheckedUpdateManyWithoutOrgNestedInput
    sales?: SalesUncheckedUpdateManyWithoutBuyerNestedInput
    aiUsages?: AiUsageUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationCreateWithoutPostsInput = {
    id: string
    name?: string
    industry: $Enums.Industry
    patronage: $Enums.Subscription
    createdAt?: Date | string
    address: string
    description: string
    emailAddress: string
    phoneNumber: string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    facebookPageId?: string | null
    facebookAccessToken?: string | null
    members?: ClientCreateNestedManyWithoutOfOrgInput
    financeData?: FinanceCreateNestedManyWithoutOrgInput
    financeAnalyses?: FinanceAnalysisCreateNestedManyWithoutOrgInput
    InviteCode?: InviteCodeCreateNestedManyWithoutOrganizationInput
    marketinAIUsages?: MarketinAIUsageCreateNestedManyWithoutOrgInput
    marketingStrategy?: MarketingStrategyCreateNestedOneWithoutOrgInput
    sales?: SalesCreateNestedManyWithoutBuyerInput
    aiUsages?: AiUsageCreateNestedManyWithoutOrgInput
  }

  export type OrganizationUncheckedCreateWithoutPostsInput = {
    id: string
    name?: string
    industry: $Enums.Industry
    patronage: $Enums.Subscription
    createdAt?: Date | string
    address: string
    description: string
    emailAddress: string
    phoneNumber: string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    facebookPageId?: string | null
    facebookAccessToken?: string | null
    members?: ClientUncheckedCreateNestedManyWithoutOfOrgInput
    financeData?: FinanceUncheckedCreateNestedManyWithoutOrgInput
    financeAnalyses?: FinanceAnalysisUncheckedCreateNestedManyWithoutOrgInput
    InviteCode?: InviteCodeUncheckedCreateNestedManyWithoutOrganizationInput
    marketinAIUsages?: MarketinAIUsageUncheckedCreateNestedManyWithoutOrgInput
    marketingStrategy?: MarketingStrategyUncheckedCreateNestedOneWithoutOrgInput
    sales?: SalesUncheckedCreateNestedManyWithoutBuyerInput
    aiUsages?: AiUsageUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrganizationCreateOrConnectWithoutPostsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutPostsInput, OrganizationUncheckedCreateWithoutPostsInput>
  }

  export type OrganizationUpsertWithoutPostsInput = {
    update: XOR<OrganizationUpdateWithoutPostsInput, OrganizationUncheckedUpdateWithoutPostsInput>
    create: XOR<OrganizationCreateWithoutPostsInput, OrganizationUncheckedCreateWithoutPostsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutPostsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutPostsInput, OrganizationUncheckedUpdateWithoutPostsInput>
  }

  export type OrganizationUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    industry?: EnumIndustryFieldUpdateOperationsInput | $Enums.Industry
    patronage?: EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPageId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    members?: ClientUpdateManyWithoutOfOrgNestedInput
    financeData?: FinanceUpdateManyWithoutOrgNestedInput
    financeAnalyses?: FinanceAnalysisUpdateManyWithoutOrgNestedInput
    InviteCode?: InviteCodeUpdateManyWithoutOrganizationNestedInput
    marketinAIUsages?: MarketinAIUsageUpdateManyWithoutOrgNestedInput
    marketingStrategy?: MarketingStrategyUpdateOneWithoutOrgNestedInput
    sales?: SalesUpdateManyWithoutBuyerNestedInput
    aiUsages?: AiUsageUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    industry?: EnumIndustryFieldUpdateOperationsInput | $Enums.Industry
    patronage?: EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPageId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    members?: ClientUncheckedUpdateManyWithoutOfOrgNestedInput
    financeData?: FinanceUncheckedUpdateManyWithoutOrgNestedInput
    financeAnalyses?: FinanceAnalysisUncheckedUpdateManyWithoutOrgNestedInput
    InviteCode?: InviteCodeUncheckedUpdateManyWithoutOrganizationNestedInput
    marketinAIUsages?: MarketinAIUsageUncheckedUpdateManyWithoutOrgNestedInput
    marketingStrategy?: MarketingStrategyUncheckedUpdateOneWithoutOrgNestedInput
    sales?: SalesUncheckedUpdateManyWithoutBuyerNestedInput
    aiUsages?: AiUsageUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationCreateWithoutInviteCodeInput = {
    id: string
    name?: string
    industry: $Enums.Industry
    patronage: $Enums.Subscription
    createdAt?: Date | string
    address: string
    description: string
    emailAddress: string
    phoneNumber: string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    facebookPageId?: string | null
    facebookAccessToken?: string | null
    members?: ClientCreateNestedManyWithoutOfOrgInput
    financeData?: FinanceCreateNestedManyWithoutOrgInput
    financeAnalyses?: FinanceAnalysisCreateNestedManyWithoutOrgInput
    marketinAIUsages?: MarketinAIUsageCreateNestedManyWithoutOrgInput
    marketingStrategy?: MarketingStrategyCreateNestedOneWithoutOrgInput
    posts?: PostCreateNestedManyWithoutOrgInput
    sales?: SalesCreateNestedManyWithoutBuyerInput
    aiUsages?: AiUsageCreateNestedManyWithoutOrgInput
  }

  export type OrganizationUncheckedCreateWithoutInviteCodeInput = {
    id: string
    name?: string
    industry: $Enums.Industry
    patronage: $Enums.Subscription
    createdAt?: Date | string
    address: string
    description: string
    emailAddress: string
    phoneNumber: string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    facebookPageId?: string | null
    facebookAccessToken?: string | null
    members?: ClientUncheckedCreateNestedManyWithoutOfOrgInput
    financeData?: FinanceUncheckedCreateNestedManyWithoutOrgInput
    financeAnalyses?: FinanceAnalysisUncheckedCreateNestedManyWithoutOrgInput
    marketinAIUsages?: MarketinAIUsageUncheckedCreateNestedManyWithoutOrgInput
    marketingStrategy?: MarketingStrategyUncheckedCreateNestedOneWithoutOrgInput
    posts?: PostUncheckedCreateNestedManyWithoutOrgInput
    sales?: SalesUncheckedCreateNestedManyWithoutBuyerInput
    aiUsages?: AiUsageUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrganizationCreateOrConnectWithoutInviteCodeInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutInviteCodeInput, OrganizationUncheckedCreateWithoutInviteCodeInput>
  }

  export type OrganizationUpsertWithoutInviteCodeInput = {
    update: XOR<OrganizationUpdateWithoutInviteCodeInput, OrganizationUncheckedUpdateWithoutInviteCodeInput>
    create: XOR<OrganizationCreateWithoutInviteCodeInput, OrganizationUncheckedCreateWithoutInviteCodeInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutInviteCodeInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutInviteCodeInput, OrganizationUncheckedUpdateWithoutInviteCodeInput>
  }

  export type OrganizationUpdateWithoutInviteCodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    industry?: EnumIndustryFieldUpdateOperationsInput | $Enums.Industry
    patronage?: EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPageId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    members?: ClientUpdateManyWithoutOfOrgNestedInput
    financeData?: FinanceUpdateManyWithoutOrgNestedInput
    financeAnalyses?: FinanceAnalysisUpdateManyWithoutOrgNestedInput
    marketinAIUsages?: MarketinAIUsageUpdateManyWithoutOrgNestedInput
    marketingStrategy?: MarketingStrategyUpdateOneWithoutOrgNestedInput
    posts?: PostUpdateManyWithoutOrgNestedInput
    sales?: SalesUpdateManyWithoutBuyerNestedInput
    aiUsages?: AiUsageUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutInviteCodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    industry?: EnumIndustryFieldUpdateOperationsInput | $Enums.Industry
    patronage?: EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPageId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    members?: ClientUncheckedUpdateManyWithoutOfOrgNestedInput
    financeData?: FinanceUncheckedUpdateManyWithoutOrgNestedInput
    financeAnalyses?: FinanceAnalysisUncheckedUpdateManyWithoutOrgNestedInput
    marketinAIUsages?: MarketinAIUsageUncheckedUpdateManyWithoutOrgNestedInput
    marketingStrategy?: MarketingStrategyUncheckedUpdateOneWithoutOrgNestedInput
    posts?: PostUncheckedUpdateManyWithoutOrgNestedInput
    sales?: SalesUncheckedUpdateManyWithoutBuyerNestedInput
    aiUsages?: AiUsageUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type ClientCreateWithoutAuditLogsInput = {
    id: string
    role: $Enums.MemberAccessType
    email: string
    firstname: string
    lastname: string
    profilePic?: string | null
    createdAt?: Date | string
    lastSeenAt?: Date | string
    personalEmail?: string | null
    phoneNumber?: string | null
    aiUsages?: AiUsageCreateNestedManyWithoutClientInput
    ofOrg?: OrganizationCreateNestedOneWithoutMembersInput
    marketinAIUsages?: MarketinAIUsageCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutAuditLogsInput = {
    id: string
    orgId?: string | null
    role: $Enums.MemberAccessType
    email: string
    firstname: string
    lastname: string
    profilePic?: string | null
    createdAt?: Date | string
    lastSeenAt?: Date | string
    personalEmail?: string | null
    phoneNumber?: string | null
    aiUsages?: AiUsageUncheckedCreateNestedManyWithoutClientInput
    marketinAIUsages?: MarketinAIUsageUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutAuditLogsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutAuditLogsInput, ClientUncheckedCreateWithoutAuditLogsInput>
  }

  export type ClientUpsertWithoutAuditLogsInput = {
    update: XOR<ClientUpdateWithoutAuditLogsInput, ClientUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<ClientCreateWithoutAuditLogsInput, ClientUncheckedCreateWithoutAuditLogsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutAuditLogsInput, ClientUncheckedUpdateWithoutAuditLogsInput>
  }

  export type ClientUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberAccessTypeFieldUpdateOperationsInput | $Enums.MemberAccessType
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    aiUsages?: AiUsageUpdateManyWithoutClientNestedInput
    ofOrg?: OrganizationUpdateOneWithoutMembersNestedInput
    marketinAIUsages?: MarketinAIUsageUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumMemberAccessTypeFieldUpdateOperationsInput | $Enums.MemberAccessType
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    aiUsages?: AiUsageUncheckedUpdateManyWithoutClientNestedInput
    marketinAIUsages?: MarketinAIUsageUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateWithoutAiUsagesInput = {
    id: string
    role: $Enums.MemberAccessType
    email: string
    firstname: string
    lastname: string
    profilePic?: string | null
    createdAt?: Date | string
    lastSeenAt?: Date | string
    personalEmail?: string | null
    phoneNumber?: string | null
    auditLogs?: AuditLogCreateNestedManyWithoutClientInput
    ofOrg?: OrganizationCreateNestedOneWithoutMembersInput
    marketinAIUsages?: MarketinAIUsageCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutAiUsagesInput = {
    id: string
    orgId?: string | null
    role: $Enums.MemberAccessType
    email: string
    firstname: string
    lastname: string
    profilePic?: string | null
    createdAt?: Date | string
    lastSeenAt?: Date | string
    personalEmail?: string | null
    phoneNumber?: string | null
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutClientInput
    marketinAIUsages?: MarketinAIUsageUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutAiUsagesInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutAiUsagesInput, ClientUncheckedCreateWithoutAiUsagesInput>
  }

  export type OrganizationCreateWithoutAiUsagesInput = {
    id: string
    name?: string
    industry: $Enums.Industry
    patronage: $Enums.Subscription
    createdAt?: Date | string
    address: string
    description: string
    emailAddress: string
    phoneNumber: string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    facebookPageId?: string | null
    facebookAccessToken?: string | null
    members?: ClientCreateNestedManyWithoutOfOrgInput
    financeData?: FinanceCreateNestedManyWithoutOrgInput
    financeAnalyses?: FinanceAnalysisCreateNestedManyWithoutOrgInput
    InviteCode?: InviteCodeCreateNestedManyWithoutOrganizationInput
    marketinAIUsages?: MarketinAIUsageCreateNestedManyWithoutOrgInput
    marketingStrategy?: MarketingStrategyCreateNestedOneWithoutOrgInput
    posts?: PostCreateNestedManyWithoutOrgInput
    sales?: SalesCreateNestedManyWithoutBuyerInput
  }

  export type OrganizationUncheckedCreateWithoutAiUsagesInput = {
    id: string
    name?: string
    industry: $Enums.Industry
    patronage: $Enums.Subscription
    createdAt?: Date | string
    address: string
    description: string
    emailAddress: string
    phoneNumber: string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    facebookPageId?: string | null
    facebookAccessToken?: string | null
    members?: ClientUncheckedCreateNestedManyWithoutOfOrgInput
    financeData?: FinanceUncheckedCreateNestedManyWithoutOrgInput
    financeAnalyses?: FinanceAnalysisUncheckedCreateNestedManyWithoutOrgInput
    InviteCode?: InviteCodeUncheckedCreateNestedManyWithoutOrganizationInput
    marketinAIUsages?: MarketinAIUsageUncheckedCreateNestedManyWithoutOrgInput
    marketingStrategy?: MarketingStrategyUncheckedCreateNestedOneWithoutOrgInput
    posts?: PostUncheckedCreateNestedManyWithoutOrgInput
    sales?: SalesUncheckedCreateNestedManyWithoutBuyerInput
  }

  export type OrganizationCreateOrConnectWithoutAiUsagesInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutAiUsagesInput, OrganizationUncheckedCreateWithoutAiUsagesInput>
  }

  export type ClientUpsertWithoutAiUsagesInput = {
    update: XOR<ClientUpdateWithoutAiUsagesInput, ClientUncheckedUpdateWithoutAiUsagesInput>
    create: XOR<ClientCreateWithoutAiUsagesInput, ClientUncheckedCreateWithoutAiUsagesInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutAiUsagesInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutAiUsagesInput, ClientUncheckedUpdateWithoutAiUsagesInput>
  }

  export type ClientUpdateWithoutAiUsagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberAccessTypeFieldUpdateOperationsInput | $Enums.MemberAccessType
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    auditLogs?: AuditLogUpdateManyWithoutClientNestedInput
    ofOrg?: OrganizationUpdateOneWithoutMembersNestedInput
    marketinAIUsages?: MarketinAIUsageUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutAiUsagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumMemberAccessTypeFieldUpdateOperationsInput | $Enums.MemberAccessType
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    auditLogs?: AuditLogUncheckedUpdateManyWithoutClientNestedInput
    marketinAIUsages?: MarketinAIUsageUncheckedUpdateManyWithoutClientNestedInput
  }

  export type OrganizationUpsertWithoutAiUsagesInput = {
    update: XOR<OrganizationUpdateWithoutAiUsagesInput, OrganizationUncheckedUpdateWithoutAiUsagesInput>
    create: XOR<OrganizationCreateWithoutAiUsagesInput, OrganizationUncheckedCreateWithoutAiUsagesInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutAiUsagesInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutAiUsagesInput, OrganizationUncheckedUpdateWithoutAiUsagesInput>
  }

  export type OrganizationUpdateWithoutAiUsagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    industry?: EnumIndustryFieldUpdateOperationsInput | $Enums.Industry
    patronage?: EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPageId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    members?: ClientUpdateManyWithoutOfOrgNestedInput
    financeData?: FinanceUpdateManyWithoutOrgNestedInput
    financeAnalyses?: FinanceAnalysisUpdateManyWithoutOrgNestedInput
    InviteCode?: InviteCodeUpdateManyWithoutOrganizationNestedInput
    marketinAIUsages?: MarketinAIUsageUpdateManyWithoutOrgNestedInput
    marketingStrategy?: MarketingStrategyUpdateOneWithoutOrgNestedInput
    posts?: PostUpdateManyWithoutOrgNestedInput
    sales?: SalesUpdateManyWithoutBuyerNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutAiUsagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    industry?: EnumIndustryFieldUpdateOperationsInput | $Enums.Industry
    patronage?: EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPageId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    members?: ClientUncheckedUpdateManyWithoutOfOrgNestedInput
    financeData?: FinanceUncheckedUpdateManyWithoutOrgNestedInput
    financeAnalyses?: FinanceAnalysisUncheckedUpdateManyWithoutOrgNestedInput
    InviteCode?: InviteCodeUncheckedUpdateManyWithoutOrganizationNestedInput
    marketinAIUsages?: MarketinAIUsageUncheckedUpdateManyWithoutOrgNestedInput
    marketingStrategy?: MarketingStrategyUncheckedUpdateOneWithoutOrgNestedInput
    posts?: PostUncheckedUpdateManyWithoutOrgNestedInput
    sales?: SalesUncheckedUpdateManyWithoutBuyerNestedInput
  }

  export type ClientCreateWithoutMarketinAIUsagesInput = {
    id: string
    role: $Enums.MemberAccessType
    email: string
    firstname: string
    lastname: string
    profilePic?: string | null
    createdAt?: Date | string
    lastSeenAt?: Date | string
    personalEmail?: string | null
    phoneNumber?: string | null
    aiUsages?: AiUsageCreateNestedManyWithoutClientInput
    auditLogs?: AuditLogCreateNestedManyWithoutClientInput
    ofOrg?: OrganizationCreateNestedOneWithoutMembersInput
  }

  export type ClientUncheckedCreateWithoutMarketinAIUsagesInput = {
    id: string
    orgId?: string | null
    role: $Enums.MemberAccessType
    email: string
    firstname: string
    lastname: string
    profilePic?: string | null
    createdAt?: Date | string
    lastSeenAt?: Date | string
    personalEmail?: string | null
    phoneNumber?: string | null
    aiUsages?: AiUsageUncheckedCreateNestedManyWithoutClientInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutMarketinAIUsagesInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutMarketinAIUsagesInput, ClientUncheckedCreateWithoutMarketinAIUsagesInput>
  }

  export type OrganizationCreateWithoutMarketinAIUsagesInput = {
    id: string
    name?: string
    industry: $Enums.Industry
    patronage: $Enums.Subscription
    createdAt?: Date | string
    address: string
    description: string
    emailAddress: string
    phoneNumber: string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    facebookPageId?: string | null
    facebookAccessToken?: string | null
    members?: ClientCreateNestedManyWithoutOfOrgInput
    financeData?: FinanceCreateNestedManyWithoutOrgInput
    financeAnalyses?: FinanceAnalysisCreateNestedManyWithoutOrgInput
    InviteCode?: InviteCodeCreateNestedManyWithoutOrganizationInput
    marketingStrategy?: MarketingStrategyCreateNestedOneWithoutOrgInput
    posts?: PostCreateNestedManyWithoutOrgInput
    sales?: SalesCreateNestedManyWithoutBuyerInput
    aiUsages?: AiUsageCreateNestedManyWithoutOrgInput
  }

  export type OrganizationUncheckedCreateWithoutMarketinAIUsagesInput = {
    id: string
    name?: string
    industry: $Enums.Industry
    patronage: $Enums.Subscription
    createdAt?: Date | string
    address: string
    description: string
    emailAddress: string
    phoneNumber: string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    facebookPageId?: string | null
    facebookAccessToken?: string | null
    members?: ClientUncheckedCreateNestedManyWithoutOfOrgInput
    financeData?: FinanceUncheckedCreateNestedManyWithoutOrgInput
    financeAnalyses?: FinanceAnalysisUncheckedCreateNestedManyWithoutOrgInput
    InviteCode?: InviteCodeUncheckedCreateNestedManyWithoutOrganizationInput
    marketingStrategy?: MarketingStrategyUncheckedCreateNestedOneWithoutOrgInput
    posts?: PostUncheckedCreateNestedManyWithoutOrgInput
    sales?: SalesUncheckedCreateNestedManyWithoutBuyerInput
    aiUsages?: AiUsageUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrganizationCreateOrConnectWithoutMarketinAIUsagesInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutMarketinAIUsagesInput, OrganizationUncheckedCreateWithoutMarketinAIUsagesInput>
  }

  export type ClientUpsertWithoutMarketinAIUsagesInput = {
    update: XOR<ClientUpdateWithoutMarketinAIUsagesInput, ClientUncheckedUpdateWithoutMarketinAIUsagesInput>
    create: XOR<ClientCreateWithoutMarketinAIUsagesInput, ClientUncheckedCreateWithoutMarketinAIUsagesInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutMarketinAIUsagesInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutMarketinAIUsagesInput, ClientUncheckedUpdateWithoutMarketinAIUsagesInput>
  }

  export type ClientUpdateWithoutMarketinAIUsagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberAccessTypeFieldUpdateOperationsInput | $Enums.MemberAccessType
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    aiUsages?: AiUsageUpdateManyWithoutClientNestedInput
    auditLogs?: AuditLogUpdateManyWithoutClientNestedInput
    ofOrg?: OrganizationUpdateOneWithoutMembersNestedInput
  }

  export type ClientUncheckedUpdateWithoutMarketinAIUsagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumMemberAccessTypeFieldUpdateOperationsInput | $Enums.MemberAccessType
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    aiUsages?: AiUsageUncheckedUpdateManyWithoutClientNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutClientNestedInput
  }

  export type OrganizationUpsertWithoutMarketinAIUsagesInput = {
    update: XOR<OrganizationUpdateWithoutMarketinAIUsagesInput, OrganizationUncheckedUpdateWithoutMarketinAIUsagesInput>
    create: XOR<OrganizationCreateWithoutMarketinAIUsagesInput, OrganizationUncheckedCreateWithoutMarketinAIUsagesInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutMarketinAIUsagesInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutMarketinAIUsagesInput, OrganizationUncheckedUpdateWithoutMarketinAIUsagesInput>
  }

  export type OrganizationUpdateWithoutMarketinAIUsagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    industry?: EnumIndustryFieldUpdateOperationsInput | $Enums.Industry
    patronage?: EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPageId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    members?: ClientUpdateManyWithoutOfOrgNestedInput
    financeData?: FinanceUpdateManyWithoutOrgNestedInput
    financeAnalyses?: FinanceAnalysisUpdateManyWithoutOrgNestedInput
    InviteCode?: InviteCodeUpdateManyWithoutOrganizationNestedInput
    marketingStrategy?: MarketingStrategyUpdateOneWithoutOrgNestedInput
    posts?: PostUpdateManyWithoutOrgNestedInput
    sales?: SalesUpdateManyWithoutBuyerNestedInput
    aiUsages?: AiUsageUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutMarketinAIUsagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    industry?: EnumIndustryFieldUpdateOperationsInput | $Enums.Industry
    patronage?: EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPageId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    members?: ClientUncheckedUpdateManyWithoutOfOrgNestedInput
    financeData?: FinanceUncheckedUpdateManyWithoutOrgNestedInput
    financeAnalyses?: FinanceAnalysisUncheckedUpdateManyWithoutOrgNestedInput
    InviteCode?: InviteCodeUncheckedUpdateManyWithoutOrganizationNestedInput
    marketingStrategy?: MarketingStrategyUncheckedUpdateOneWithoutOrgNestedInput
    posts?: PostUncheckedUpdateManyWithoutOrgNestedInput
    sales?: SalesUncheckedUpdateManyWithoutBuyerNestedInput
    aiUsages?: AiUsageUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationCreateWithoutSalesInput = {
    id: string
    name?: string
    industry: $Enums.Industry
    patronage: $Enums.Subscription
    createdAt?: Date | string
    address: string
    description: string
    emailAddress: string
    phoneNumber: string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    facebookPageId?: string | null
    facebookAccessToken?: string | null
    members?: ClientCreateNestedManyWithoutOfOrgInput
    financeData?: FinanceCreateNestedManyWithoutOrgInput
    financeAnalyses?: FinanceAnalysisCreateNestedManyWithoutOrgInput
    InviteCode?: InviteCodeCreateNestedManyWithoutOrganizationInput
    marketinAIUsages?: MarketinAIUsageCreateNestedManyWithoutOrgInput
    marketingStrategy?: MarketingStrategyCreateNestedOneWithoutOrgInput
    posts?: PostCreateNestedManyWithoutOrgInput
    aiUsages?: AiUsageCreateNestedManyWithoutOrgInput
  }

  export type OrganizationUncheckedCreateWithoutSalesInput = {
    id: string
    name?: string
    industry: $Enums.Industry
    patronage: $Enums.Subscription
    createdAt?: Date | string
    address: string
    description: string
    emailAddress: string
    phoneNumber: string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    facebookPageId?: string | null
    facebookAccessToken?: string | null
    members?: ClientUncheckedCreateNestedManyWithoutOfOrgInput
    financeData?: FinanceUncheckedCreateNestedManyWithoutOrgInput
    financeAnalyses?: FinanceAnalysisUncheckedCreateNestedManyWithoutOrgInput
    InviteCode?: InviteCodeUncheckedCreateNestedManyWithoutOrganizationInput
    marketinAIUsages?: MarketinAIUsageUncheckedCreateNestedManyWithoutOrgInput
    marketingStrategy?: MarketingStrategyUncheckedCreateNestedOneWithoutOrgInput
    posts?: PostUncheckedCreateNestedManyWithoutOrgInput
    aiUsages?: AiUsageUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrganizationCreateOrConnectWithoutSalesInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutSalesInput, OrganizationUncheckedCreateWithoutSalesInput>
  }

  export type OrganizationUpsertWithoutSalesInput = {
    update: XOR<OrganizationUpdateWithoutSalesInput, OrganizationUncheckedUpdateWithoutSalesInput>
    create: XOR<OrganizationCreateWithoutSalesInput, OrganizationUncheckedCreateWithoutSalesInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutSalesInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutSalesInput, OrganizationUncheckedUpdateWithoutSalesInput>
  }

  export type OrganizationUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    industry?: EnumIndustryFieldUpdateOperationsInput | $Enums.Industry
    patronage?: EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPageId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    members?: ClientUpdateManyWithoutOfOrgNestedInput
    financeData?: FinanceUpdateManyWithoutOrgNestedInput
    financeAnalyses?: FinanceAnalysisUpdateManyWithoutOrgNestedInput
    InviteCode?: InviteCodeUpdateManyWithoutOrganizationNestedInput
    marketinAIUsages?: MarketinAIUsageUpdateManyWithoutOrgNestedInput
    marketingStrategy?: MarketingStrategyUpdateOneWithoutOrgNestedInput
    posts?: PostUpdateManyWithoutOrgNestedInput
    aiUsages?: AiUsageUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    industry?: EnumIndustryFieldUpdateOperationsInput | $Enums.Industry
    patronage?: EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPageId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    members?: ClientUncheckedUpdateManyWithoutOfOrgNestedInput
    financeData?: FinanceUncheckedUpdateManyWithoutOrgNestedInput
    financeAnalyses?: FinanceAnalysisUncheckedUpdateManyWithoutOrgNestedInput
    InviteCode?: InviteCodeUncheckedUpdateManyWithoutOrganizationNestedInput
    marketinAIUsages?: MarketinAIUsageUncheckedUpdateManyWithoutOrgNestedInput
    marketingStrategy?: MarketingStrategyUncheckedUpdateOneWithoutOrgNestedInput
    posts?: PostUncheckedUpdateManyWithoutOrgNestedInput
    aiUsages?: AiUsageUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type ClientCreateManyOfOrgInput = {
    id: string
    role: $Enums.MemberAccessType
    email: string
    firstname: string
    lastname: string
    profilePic?: string | null
    createdAt?: Date | string
    lastSeenAt?: Date | string
    personalEmail?: string | null
    phoneNumber?: string | null
  }

  export type FinanceCreateManyOrgInput = {
    id?: string
    month?: Date | string | null
    balance?: number | null
    revenue?: number | null
    expense?: number | null
    netProfit?: number | null
    margin?: number | null
  }

  export type FinanceAnalysisCreateManyOrgInput = {
    id?: string
    summary: string
    categories: JsonNullValueInput | InputJsonValue
    monthly?: NullableJsonNullValueInput | InputJsonValue
    tips: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type InviteCodeCreateManyOrganizationInput = {
    code: string
    createdBy: string
    expiresAt: Date | string
  }

  export type MarketinAIUsageCreateManyOrgInput = {
    id?: string
    clientId: string
    date?: Date | string
  }

  export type PostCreateManyOrgInput = {
    id?: string
    title: string
    content?: string
    platform: string
    reach?: number
    publishedAt?: Date | string
    published?: boolean
    images?: JsonNullValueInput | InputJsonValue
  }

  export type SalesCreateManyBuyerInput = {
    id?: string
    date: Date | string
    product: $Enums.Subscription
  }

  export type AiUsageCreateManyOrgInput = {
    id?: string
    clientId: string
    date?: Date | string
  }

  export type ClientUpdateWithoutOfOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberAccessTypeFieldUpdateOperationsInput | $Enums.MemberAccessType
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    aiUsages?: AiUsageUpdateManyWithoutClientNestedInput
    auditLogs?: AuditLogUpdateManyWithoutClientNestedInput
    marketinAIUsages?: MarketinAIUsageUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutOfOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberAccessTypeFieldUpdateOperationsInput | $Enums.MemberAccessType
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    aiUsages?: AiUsageUncheckedUpdateManyWithoutClientNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutClientNestedInput
    marketinAIUsages?: MarketinAIUsageUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateManyWithoutOfOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberAccessTypeFieldUpdateOperationsInput | $Enums.MemberAccessType
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FinanceUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    revenue?: NullableIntFieldUpdateOperationsInput | number | null
    expense?: NullableIntFieldUpdateOperationsInput | number | null
    netProfit?: NullableIntFieldUpdateOperationsInput | number | null
    margin?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FinanceUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    revenue?: NullableIntFieldUpdateOperationsInput | number | null
    expense?: NullableIntFieldUpdateOperationsInput | number | null
    netProfit?: NullableIntFieldUpdateOperationsInput | number | null
    margin?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FinanceUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    revenue?: NullableIntFieldUpdateOperationsInput | number | null
    expense?: NullableIntFieldUpdateOperationsInput | number | null
    netProfit?: NullableIntFieldUpdateOperationsInput | number | null
    margin?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FinanceAnalysisUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    categories?: JsonNullValueInput | InputJsonValue
    monthly?: NullableJsonNullValueInput | InputJsonValue
    tips?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinanceAnalysisUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    categories?: JsonNullValueInput | InputJsonValue
    monthly?: NullableJsonNullValueInput | InputJsonValue
    tips?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinanceAnalysisUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    categories?: JsonNullValueInput | InputJsonValue
    monthly?: NullableJsonNullValueInput | InputJsonValue
    tips?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteCodeUpdateWithoutOrganizationInput = {
    code?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteCodeUncheckedUpdateWithoutOrganizationInput = {
    code?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteCodeUncheckedUpdateManyWithoutOrganizationInput = {
    code?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketinAIUsageUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutMarketinAIUsagesNestedInput
  }

  export type MarketinAIUsageUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketinAIUsageUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    reach?: IntFieldUpdateOperationsInput | number
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    images?: JsonNullValueInput | InputJsonValue
  }

  export type PostUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    reach?: IntFieldUpdateOperationsInput | number
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    images?: JsonNullValueInput | InputJsonValue
  }

  export type PostUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    reach?: IntFieldUpdateOperationsInput | number
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    images?: JsonNullValueInput | InputJsonValue
  }

  export type SalesUpdateWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription
  }

  export type SalesUncheckedUpdateWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription
  }

  export type SalesUncheckedUpdateManyWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: EnumSubscriptionFieldUpdateOperationsInput | $Enums.Subscription
  }

  export type AiUsageUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutAiUsagesNestedInput
  }

  export type AiUsageUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiUsageUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiUsageCreateManyClientInput = {
    id?: string
    orgId: string
    date?: Date | string
  }

  export type AuditLogCreateManyClientInput = {
    id?: string
    action: $Enums.AuditAction
    target: $Enums.AuditTarget
    details?: string | null
    date?: Date | string
  }

  export type MarketinAIUsageCreateManyClientInput = {
    id?: string
    orgId: string
    date?: Date | string
  }

  export type AiUsageUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationUpdateOneRequiredWithoutAiUsagesNestedInput
  }

  export type AiUsageUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiUsageUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    target?: EnumAuditTargetFieldUpdateOperationsInput | $Enums.AuditTarget
    details?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    target?: EnumAuditTargetFieldUpdateOperationsInput | $Enums.AuditTarget
    details?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    target?: EnumAuditTargetFieldUpdateOperationsInput | $Enums.AuditTarget
    details?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketinAIUsageUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationUpdateOneRequiredWithoutMarketinAIUsagesNestedInput
  }

  export type MarketinAIUsageUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketinAIUsageUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}