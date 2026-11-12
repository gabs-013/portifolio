import { roles, toolsMatrix } from "@/content/site";
import LogoTile from "./LogoTile";
import SectionHead from "./SectionHead";

const wrap = "mx-auto w-full max-w-[1400px] px-5 md:px-10";

/** Tools by company: a dot marks where each tool was used. */
export default function ToolsMatrix() {
  const roleById = Object.fromEntries(roles.map((r) => [r.id, r]));
  return (
      <section id="tools" aria-labelledby="tools-title" className="bg-graphite py-16 md:py-24">
        <div className={wrap}>
          <SectionHead compact id="tools-title" label="Tools" title={<>Where I used each tool</>} />

          <div className="rounded-xl border border-paper/15 bg-ink p-4 md:p-8">
            <p className="text-paper/70">
              A dot marks the roles where I used each tool.
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[300px] border-collapse text-left">
                <thead>
                  <tr>
                    <th scope="col" className="w-[50%] pb-4 text-sm font-semibold text-paper/70">
                      <span className="sr-only">Tool</span>
                    </th>
                    {toolsMatrix.roles.map((id) => {
                      const r = roleById[id];
                      return (
                        <th key={id} scope="col" className="pb-4 text-center align-bottom">
                          <span className="mx-auto flex w-fit flex-col items-center gap-2">
                            <LogoTile name={r.company} initials={r.initials} src={r.logo} fit={r.logoFit} size="sm" />
                            <span className="text-[0.8125rem] font-semibold text-paper/90">
                              {id === "wbd" ? "WBD" : r.company.split(" ")[0]}
                            </span>
                          </span>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                {toolsMatrix.groups.map((g) => (
                  <tbody key={g.title}>
                    <tr>
                      <th
                        scope="colgroup"
                        colSpan={toolsMatrix.roles.length + 1}
                        className="border-t border-paper/15 pb-1 pt-5 text-[0.8125rem] font-semibold uppercase tracking-[0.06em] text-mist"
                      >
                        {g.title}
                      </th>
                    </tr>
                    {g.tools.map((t) => (
                      <tr key={t.name} className="border-t border-paper/10">
                        <th scope="row" className="py-2 pr-3 text-[0.9375rem] font-semibold">
                          <span className="flex items-center gap-3">
                            <LogoTile
                              name={t.name}
                              initials={t.initials}
                              src={"icon" in t && t.icon ? `/images/tools/${t.icon}` : undefined}
                              size="xs"
                            />
                            {t.name}
                          </span>
                        </th>
                        {toolsMatrix.roles.map((id) => {
                          const used = (t.in as readonly string[]).includes(id);
                          return (
                            <td key={id} className="text-center">
                              {used ? (
                                <>
                                  <span aria-hidden className="inline-block h-3.5 w-3.5 rounded-full bg-tally" />
                                  <span className="sr-only">Used at {roleById[id].company}</span>
                                </>
                              ) : (
                                <span aria-hidden className="inline-block h-1 w-3 rounded-full bg-paper/15" />
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </section>
  );
}
